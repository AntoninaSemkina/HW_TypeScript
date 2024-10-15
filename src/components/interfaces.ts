export interface Item{
    urlToImage:string,
    author:string,
    publishedAt:string,
    source:{name:string},
    title:string,
    description:string,
    url:string,
    name:string,
    id:string,
    articles:string,
}
export interface Data extends Array<Item>{}

export interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage:string,
    author:string,
    publishedAt:string,
    source:{name:string},
    name:string,
    id:string,
    articles:string,
}

export interface Source {
    id: string;
    name: string;
    draw:string;
    title: string;
    description: string;
    url: string;
    urlToImage:string,
    author:string,
    publishedAt:string,
    source:{name:string},
    articles:string,
}

export interface NewsData {
    articles: Article[],
}

export interface SourcesData {
    sources: Source[],
    articles: string;
}

