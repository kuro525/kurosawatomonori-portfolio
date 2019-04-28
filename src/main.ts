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

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

