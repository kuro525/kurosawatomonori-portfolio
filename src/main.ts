import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import flamelink from 'flamelink/app';
import 'flamelink/content';
import 'flamelink/storage';

import firebaseConfig from '@/firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();


export const app = flamelink({
    firebaseApp,
    env: 'production', // optional, defaults to `production`
    locale: 'en-US', // optional, defaults to `en-US`
    dbType: 'cf', // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Real-time DB vs Cloud Firestore)
});

// flamelink使うときは
// import {app} from '../main';

Vue.config.productionTip = false;

Vue.filter('imgUrl', (imgName: string, size: string) => {
  return `https://firebasestorage.googleapis.com/v0/b/portfolio-161c4.appspot.com/o/flamelink%2Fmedia%2Fsized%2F${size}%2F${imgName}?alt=media`;
});

Vue.filter('dayFormat', (date: string) => {
    const value = date.substr(0, 7);
    const reg = new RegExp('-', 'g');
    return value.replace(reg, '.');
})





new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');

