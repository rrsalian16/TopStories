import {StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {
    Header,
    Layout,
    StoryItem,
    Text,
    TextInput,
} from '@TopStories/Component';
import {useForm} from '@TopStories/Hook';
import {useAppDispatch, useAppSelector} from '@TopStories/Hook/redux';
import {debounce, get} from 'lodash';
import {StorySearchActions} from '.';
import {ActivityIndicator} from '@react-native-material/core';
import {AppUtils} from '@TopStories/Utils';

const TITLE_LIMIT = 50;
const IMAGE_BASE_URL = 'https://www.nytimes.com/';

const StorySearch: React.FC = () => {
    const search = useForm({value: ''});
    const dispatch = useAppDispatch();
    const searchResponse = useAppSelector((state) => state.search);
    const searchValue = search.value;

    const isLoading = get(searchResponse, ['loading']);
    const error = get(searchResponse, ['error']);
    const data = get(searchResponse, ['data']);

    useEffect(() => {
        searchValue && debouncedSearch(searchValue);
        if (!searchValue && data?.docs) clearResult();

        return () => clearResult();
    }, [searchValue]);

    const searchStory = (value: string) => {
        dispatch(StorySearchActions.request(value));
    };

    const clearResult = () => {
        dispatch(StorySearchActions.clear());
    };

    const debouncedSearch = useCallback(debounce(searchStory, 300), []);
    const isNoResultFound = !data?.docs.length && !isLoading && searchValue;

    const _onEndEditing = () => {
        //Persisst the value for show last 5 search
        return;
    };

    const _onClickListItem = useCallback(
        (id: number) => console.log('id-->', id),
        [],
    );

    const _renderStoryList = () =>
        data?.docs.map(({abstract, multimedia, section_name, _id}, index) => {
            const _title = AppUtils.getTrimedString(abstract, TITLE_LIMIT);
            const leading =
                multimedia[0]?.url && IMAGE_BASE_URL + multimedia[0]?.url;

            return (
                <StoryItem
                    onPress={() => _onClickListItem(index)}
                    key={_id}
                    title={_title}
                    leadingUrl={leading}
                    overline={section_name}
                />
            );
        });

    return (
        <Layout.Scrollable header={<Header title='Search' />}>
            <View style={style.serachContainer}>
                <TextInput
                    label='Search'
                    {...search}
                    onEndEditing={_onEndEditing}
                />
            </View>
            {isNoResultFound && <Text>No Resutl Found</Text>}
            {isLoading && <ActivityIndicator style={style.loader} />}
            {data?.docs.length && _renderStoryList()}
        </Layout.Scrollable>
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
});

export default StorySearch;
