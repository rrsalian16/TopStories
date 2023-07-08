export type MultiMediaType = {
    caption: string;
    copyright: string;
    format: string;
    height: number;
    subtype: string;
    type: string;
    url: string;
};

export type StoryType = {
    byline: string;
    abstract: string;
    created_date: string;
    multimedia: MultiMediaType[];
    published_date: string;
    section: string;
    short_url: string;
    subsection: string;
    title: string;
    updated_date: string;
    uri: string;
    url: string;
};

export type StoyListPrams = {
    type: string;
};
