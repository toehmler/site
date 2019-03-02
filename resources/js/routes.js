import Vue from 'vue';
import VueRouter from 'vue-router';

import Cover from '@/js/views/Cover';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Cover,
            meta: {
                title: 'Cover'
            }
        },
    ],
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next();
})

export default router;




