import Vue from 'vue';
import VueRouter from 'vue-router';

import Cover from '@/js/views/Cover';
import Home from '@/js/views/Home';
import Dompen from '@/js/views/projects/Dompen';
import Domcbd from '@/js/views/projects/Domcbd';
import Calavera from '@/js/views/projects/Calavera';
import Unet from '@/js/views/Projects/Unet';


import VueScrollTo from 'vue-scrollto';

Vue.use(VueRouter);
Vue.use(VueScrollTo);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Home | Trey Oehmler'
            }
        },
        {
            path: '/dompen',
            name: 'dompen',
            component: Dompen,
            meta: {
                title: 'Dompen | Trey Oehmler'
            }
        },
        {
            path: '/domcbd',
            name: 'domcbd',
            component: Domcbd,
            meta: {
                title: 'DomCBD | Trey Oehmler'
            }
        },
        {
            path: '/calavera',
            name: 'calavera',
            component: Calavera,
            meta: {
                title: 'Calavera | Trey Oehmler'
            }
        },
        {
            path: '/unet',
            name: 'unet',
            component: Unet,
            meta: {
                title: 'Tumor Segmentation | Trey Oehmler'
            }
        },




    ],
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next();
})

export default router;




