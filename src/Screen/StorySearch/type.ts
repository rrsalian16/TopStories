import {MultiMediaType} from '../StoryList';

export type SearchResponse = {
    page: number;
    docs: DocType[];
    meta: {
        hits: number;
        offset: number;
        time: number;
    };
};

export type Headline = {
    main: string;
    print_headline: string;
    name: string;
    sub: string;
};

export type DocType = {
    abstract: string;
    web_url: string;
    snippet: string;
    lead_paragraph: string;
    source: string;
    multimedia: MultiMediaType[];
    headline: {
        main: 'A Blood Test Predicts Pre-eclampsia in Pregnant Women';
        kicker: null;
        content_kicker: null;
        print_headline: 'Blood Test Detects Risk For Women In Pregnancy';
        name: null;
        seo: null;
        sub: null;
    };
    pub_date: string;
    document_type: string;
    news_desk: string;
    section_name: string;
    byline: {
        original: string;
        person: [
            {
                firstname: string;
                middlename: string;
                lastname: string;
            },
        ];
        organization: null;
    };
    type_of_material: string;
    _id: string;
};
