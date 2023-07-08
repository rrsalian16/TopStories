import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {
    Header,
    Layout,
    StoryItem,
    Text,
    TextInput,
} from '@TopStories/Component';
import {
    useAppDispatch,
    useAppSelector,
    useForm,
    usePrevious,
} from '@TopStories/Hook';
import {debounce, get} from 'lodash';
import {StorySearchActions} from '.';
import {ActivityIndicator, Badge} from '@react-native-material/core';
import {AppUtils} from '@TopStories/Utils';
import {DashbaordStackScreenProp} from '@TopStories/Routes/type';
import {RouteName} from '@TopStories/Routes/routeName';
import {DetailsType} from '../StoryDetail/type';

const TITLE_LIMIT = 50;
const IMAGE_BASE_URL = 'https://www.nytimes.com/';

type StorySearchProps = DashbaordStackScreenProp<RouteName.STORY_SEARCH>;

const StorySearch: React.FC<StorySearchProps> = (props: StorySearchProps) => {
    const {navigation} = props;
    const search = useForm({value: ''});
    const dispatch = useAppDispatch();
    const searchResponse = useAppSelector((state) => state.search);
    const searchValue = search.value;
    const prevValue = usePrevious(search.value);

    const data = get(searchResponse, ['data']);
    const error = get(searchResponse, ['error']);
    const isLoading = get(searchResponse, ['loading']);
    const lastSearchValue = get(searchResponse, ['history']);

    useEffect(() => {
        searchValue && debouncedSearch(searchValue);
        if (!searchValue && data?.docs) clearResult();

        return () => clearResult();
    }, [searchValue]);

    const searchStory = (value: string) => {
        const page = value === prevValue ? data?.page || 1 : 1;

        dispatch(StorySearchActions.request({search: value, page}));
    };

    const clearResult = () => {
        dispatch(StorySearchActions.clear());
    };

    const debouncedSearch = useCallback(debounce(searchStory, 300), []);
    const isNoResultFound = !!error && !isLoading && searchValue;

    const _onEndEditing = () => {
        searchValue && dispatch(StorySearchActions.adddHistory(searchValue));
    };

    const _onClickListItem = useCallback(
        (id: number) =>
            navigation.navigate(RouteName.STORY_DETAIL, {
                id,
                from: DetailsType.SEARCH,
            }),
        [],
    );

    const onPressHistoryBanner = (value: string) => search.setValue(value);
    const onEndReached = () => {
        if (!searchValue) return;
        const page =
            searchValue === prevValue ? (data && data?.page + 1) || 1 : 1;
        dispatch(StorySearchActions.request({search: searchValue, page}));
    };

    const showSearchHistory = () => (
        <View style={style.bannerContainer}>
            {lastSearchValue.map((value: string) => (
                <TouchableOpacity
                    key={value}
                    onPress={() => onPressHistoryBanner(value)}>
                    <Badge style={style.banner} label={value} color='#52232d' />
                </TouchableOpacity>
            ))}
        </View>
    );

    const _renderStoryList = () => (
        <FlatList
            style={{marginBottom: 150}}
            showsVerticalScrollIndicator={false}
            data={data?.docs}
            onEndReached={onEndReached}
            keyExtractor={(item) => item.pub_date}
            onEndReachedThreshold={0.2}
            renderItem={({item, index}) => {
                const {abstract, multimedia, section_name, _id} = item;
                const _title = AppUtils.getTrimedString(abstract, TITLE_LIMIT);
                const leading =
                    multimedia[0]?.url && IMAGE_BASE_URL + multimedia[0]?.url;

                return (
                    <StoryItem
                        onPress={() => _onClickListItem(index)}
                        title={_title}
                        leadingUrl={leading}
                        overline={section_name}
                    />
                );
            }}
        />
    );

    return (
        <Layout.Base header={<Header title='Search' />}>
            <View style={style.serachContainer}>
                <TextInput
                    label='Search'
                    {...search}
                    onEndEditing={_onEndEditing}
                />
                {showSearchHistory()}
            </View>
            {isLoading && <ActivityIndicator style={style.loader} />}
            {data?.docs.length && _renderStoryList()}
            {isNoResultFound && <Text>No Resutl Found</Text>}
        </Layout.Base>
    );
};

const style = StyleSheet.create({
    serachContainer: {
        marginVertical: 20,
    },
    loader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listStyle: {
        marginVertical: 5,
        borderRadius: 10,
    },
    listImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 3,
    },
    bannerContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        flexWrap: 'wrap',
    },
    banner: {
        margin: 3,
    },
});

export default StorySearch;
