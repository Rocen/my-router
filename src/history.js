import { BaseRouter } from './base.js';

export class HistoryRouter extends BaseRouter {
    constructor(list) {
        super(list);
        this.trigger();
        window.addEventListener('popstate', () => {
            this.trigger();
        })
    }
    trigger() {
        this.render(this.getState());
    }
    getState() {
        const pathname = window.location.pathname;
        return pathname ? pathname : '/';
    }

    push(path) {
        history.pushState(null, null, path);
        this.trigger();
    }
    replace(path) {
        history.replaceState(null, null, path);
        this.trigger();
    }
    go(num) {
        history.go(num);
    }
}