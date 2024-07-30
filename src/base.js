const dom = document.querySelector('#page');

export class BaseRouter {
    constructor(list) {
        this.list = list;
    }
    render(path) {
        let element = this.list.find((item) => item.path === path);
        element = element ? element : this.list.find((item) => item.path === '*');
        dom.innerHTML = element.component;
    }
}