import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);


// import Home from './views/Home.vue';

import Profile from './views/Profile.vue';
import Portfolio from './views/Portfolio.vue';
import PortfolioDetail from '@/views/PortfolioDetail.vue';
import Contact from '@/views/Contact.vue';
import ContactSent from '@/views/ContactSent.vue';


export default new Router({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {

            console.log(savedPosition);

            return savedPosition;
        } else {
            return {x: 0, y: 330};
        }
    },
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Profile',
            component: Profile,
        },
        {
            path: '/Portfolio',
            name: 'Portfolio',
            component: Portfolio,
        },
        {
            path: '/Portfolio/:id',
            name: 'PortfolioDetail',
            component: PortfolioDetail,
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: Contact,
        },
        {
            path: '/Contact/Sent',
            name: 'ContactSent',
            component: ContactSent,
            beforeEnter: (to, from, next) => {
                if (from.path === '/Contact') {
                    next();
                } else {
                    next({path: '/'});
                }
            },
        },
    ],
});
