
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('nav-bar', require('@/js/components/NavigationBar.vue').default);
Vue.component('contact-footer', require('@/js/components/ContactFooter.vue').default);

import VideoBackground from 'vue-responsive-video-background-player';

Vue.component('video-background', VideoBackground);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Routes from '@/js/routes.js';
import App from '@/js/views/App';

//import { Plugin } from 'vue-responsive-video-background-player'

//Vue.use(Plugin);

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App),
});

export default app;

$(document).ready(function(){
    $(this).scrollTop(0);
});

