import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: 'AIzaSyBK4jZtndmvYPmI4c2EpNIQIlkY8Q_QHFw',
    authDomain: 'vue-auth-8f1b3',
    projectId: 'vue-auth-8f1b3',
    storageBucket: 'YouConfigHere',
    messagingSenderId: 'YouConfigHere',
    appId: 'YouConfigHere',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');