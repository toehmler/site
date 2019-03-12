import Vue from 'vue';
import VueRouter from 'vue-router';

import Cover from '@/js/views/Cover';

import VueScrollTo from 'vue-scrollto';

Vue.use(VueRouter);
Vue.use(VueScrollTo);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Cover,
            meta: {
                title: 'Trey Oehmler'
            }
        },
    ],
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next();
})

export default router;




