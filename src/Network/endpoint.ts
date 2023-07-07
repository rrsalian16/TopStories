import {NETWORK_CONST} from './constant';

export const END_POINTS = {
    LOGIN: '/auth/login',
    REGISTRATION: '/auth/register',
    TOKEN_REFRESH: '/auth/refresh',

    TOP_STORIES: `/science.json?api-key=${NETWORK_CONST.API_KEY}`,
    STORY_COMMENTS: '/community-api-product/1/overview',
    STORY_SEARCH: '/docs/articlesearch-product/1/overview',
};

/* 

https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=FkSFLgSBoCPsvvynyMD1E1IvO1GmmtQY

*/
