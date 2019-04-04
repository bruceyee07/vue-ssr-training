import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Item from './views/Item.vue';

Vue.use(Router);

export default function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            { path: '/', component: Home },
            { path: '/item/:id', component: Item },
        ],
    });
}
