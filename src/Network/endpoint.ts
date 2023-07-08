import {NETWORK_CONST} from './constant';

export const END_POINTS = {
    LOGIN: '/auth/login',
    REGISTRATION: '/auth/register',
    TOKEN_REFRESH: '/auth/refresh',

    TOP_STORIES: (key = 'science') =>
        `/${key}.json?api-key=${NETWORK_CONST.API_KEY}`,
    STORY_COMMENTS: '/community-api-product/1/overview',
    STORY_SEARCH: (search: string) =>
        `/articlesearch.json?q=${search}&api-key=${NETWORK_CONST.API_KEY}`,
};
