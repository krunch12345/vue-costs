import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard.vue'),
        },
        {
            path: '/about*',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue'),
        },
        {
            path: '/notfound',
            name: 'notfound',
            component: () => import(/* webpackChunkName: "notfound" */ '../pages/NotFound.vue'),
        },
        {
            path: '/addpayment',
            name: 'addpayment',
            component: () => import(/* webpackChunkName: "addpayment" */ '../components/AddPayment.vue'),
        },
        {
            path: '*',
            redirect: {
                name: 'notfound',
            },
        },
    ],
});

const titles = {
    dashboard: 'Dashboard',
    about: 'About',
    notfound: 'Not Found',
};

router.afterEach((to) => {
    document.title = titles[to.name]
});

export default router
