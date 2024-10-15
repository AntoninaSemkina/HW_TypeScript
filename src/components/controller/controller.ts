import AppLoader from './appLoader';

type Callback = () => void;

class AppController extends AppLoader {
    getSources(callback:(...arg:any[])=>void): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event,callback:(...arg:any[])=>void): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        let currentTarget = target;

        while (currentTarget !== newsContainer && currentTarget) {
            if (currentTarget.classList.contains('source__item')) {
                const sourceId = currentTarget.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId || '');
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId || '',
                            },
                        },
                        callback
                    );
                }
                return;
            }
            currentTarget = currentTarget.parentNode as HTMLElement;
        }
    }
}

export default AppController;
