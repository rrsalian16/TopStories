import {NETWORK_CONST} from './constant';

export const END_POINTS = {
    LOGIN: '/auth/login',
    REGISTRATION: '/auth/register',
    TOKEN_REFRESH: '/auth/refresh',

    TOP_STORIES: (key = 'science') =>
        `/topstories/v2/${key}.json?api-key=${NETWORK_CONST.API_KEY}`,
    STORY_COMMENTS: '/community-api-product/1/overview',
    STORY_SEARCH: (search: string, page = 1) =>
        `/search/v2/articlesearch.json?q=${search}&page=${page}&api-key=${NETWORK_CONST.API_KEY}`,
};
/* 
('q=new+york+times&page=2&sort=oldest');


https://api.nytimes.com/svc/topstories/v2/articlesearch.json?q=Asdfadfs&page=1&api-key=FkSFLgSBoCPsvvynyMD1E1IvO1GmmtQY
https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
 */
