import { BaseRouter } from './base.js'; 

export class HashRouter extends BaseRouter {
    constructor(list) {
        super(list);
        this.trigger();
        window.addEventListener('hashchange', (e) => {
            this.trigger();
        })
    }

    trigger() {
        this.render(this.getState());
    }
    getState() {
        const hash = window.location.hash;
        return hash ? hash.slice(1) : '/';
    }
    getUrl(path) {
        const href = window.location.href;
        const index = href.indexOf('#');
        const basename = index >= 0 ? href.slice(0, index) : href;
        return `${basename}#${path}`
    }

    push(path) {
        window.location.hash = path;
    }
    replace(path) {
        window.location.replace(this.getUrl(path));
    }
    go(num) {
        window.history.go(num);
    }
}