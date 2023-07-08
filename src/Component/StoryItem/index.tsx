import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {ListItem} from '@react-native-material/core';

const getLeadingImage = (uri: string) => {
    if (!uri) return;
    return (
        <Image
            style={style.listImage}
            source={{
                uri,
            }}
        />
    );
};

type StoryItemProps = {
    key: string | number;
    title: string;
    leadingUrl?: string;
    onPress?: () => void;
    overline?: string;
};

const StoryItem: React.FC<StoryItemProps> = (props: StoryItemProps) => {
    const {
        key = '',
        title = '',
        leadingUrl = '',
        onPress = () => ({}),
        overline = '',
    } = props;

    const leadingImage = getLeadingImage(leadingUrl);

    if (!title) return null;

    return (
        <View style={style.listStyle} key={key}>
            <ListItem
                onPress={onPress}
                leadingMode='image'
                leading={leadingImage}
                overline={overline}
                title={title}
            />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
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

export default React.memo(StoryItem);
