export enum DetailsType {
    LIST = 'list',
    SEARCH = 'search',
}

export type StoryDetailsParams = {
    id?: number;
    from: DetailsType;
};
