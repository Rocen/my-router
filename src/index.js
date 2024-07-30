import { HashRouter } from './hash';
import { HistoryRouter } from './history';
import { ROUTELIST } from './router-list';

const MODE = 'history';

class WebRouter {
    constructor({ mode = 'hash', routerList }) {
        this.router = mode === "hash" ? new HashRouter(routerList) : new HistoryRouter(routerList);
    }

    push(path) {
        this.router.push(path)
    }
    replace(path) {
        this.router.replace(path)
    }
    go(num) {
        this.router.go(num);
    }
}

const webRouter = new WebRouter({
    mode: MODE,
    routerList: ROUTELIST
})

document.querySelector('.btn-list').addEventListener('click', e => {
    const event = e || window.event;
    if (event.target.tagName === 'LI') {
        const url = event.target.dataset.url;
        !url.indexOf('/') ? webRouter.push(url) : webRouter.go(url);
    }
});
  
document.querySelector('.replace-btn').addEventListener('click', e => {
    webRouter.replace('/');
});