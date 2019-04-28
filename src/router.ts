import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);


// import Home from './views/Home.vue';

import Profile from './views/Profile.vue';
import Portfolio from './views/Portfolio.vue';
import PortfolioDetail from '@/views/PortfolioDetail.vue';


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Profile',
            component: Profile,
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: Portfolio,
        },
        {
            path: '/portfolio/:id',
            name: 'PortfolioDetail',
            component: PortfolioDetail,
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        // },
    ],
});
