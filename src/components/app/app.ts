
import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import {SourcesData,NewsData} from '../interfaces';


class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start():void {
        
        document
            .querySelector('.sources')
            .addEventListener('click', (e) => this.controller.getNews(e, (data:NewsData) => this.view.drawNews(data)));
        this.controller.getSources((data:SourcesData) => this.view.drawSources(data));
    }
}

export default App;