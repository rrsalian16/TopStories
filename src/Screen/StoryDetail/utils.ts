import {StoryType} from '../StoryList';
import {DocType} from '../StorySearch';
import {DetailsType} from './type';

export const getStoryDetails = (
    from: DetailsType,
    storsyList?: StoryType,
    storsySearchList?: DocType,
) => {
    if (from === DetailsType.LIST && storsyList) {
        const {
            title,
            multimedia,
            abstract,
            section,
            url,
            byline,
            published_date,
        } = storsyList;
        return {
            title,
            multimedia,
            abstract,
            section,
            url,
            byline,
            published_date,
        };
    } else {
        return {
            title: storsySearchList?.headline.main,
            multimedia: storsySearchList?.multimedia,
            abstract: storsySearchList?.lead_paragraph,
            section: storsySearchList?.section_name,
            url: storsySearchList?.web_url as string,
            byline: storsySearchList?.byline.original,
            published_date: storsySearchList?.pub_date,
        };
    }
};
