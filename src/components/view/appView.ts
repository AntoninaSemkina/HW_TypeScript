import News from './news/news';
import Sources from './sources/sources';
import {Article, NewsData, SourcesData, Source} from '../interfaces';

export class AppView {
   news: News;
   sources: Sources;

    constructor() {
        
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsData | null):void {
        const values: Article[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesData | null):void {
        const values: Source[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
