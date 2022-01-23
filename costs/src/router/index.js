import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../pages/Dashboard.vue'),
        },
        {
            path: '/about*',
            name: 'about',
            component: () => import('../pages/About.vue'),
        },
        {
            path: '/notfound',
            name: 'notfound',
            component: () => import('../pages/NotFound.vue'),
        },
        {
            path: '/addpayment',
            name: 'addpayment',
            component: () => import('../pages/AddPayment.vue'),
        },
        {
            path: '/addpayment/:type',
            name: 'addpayment_quickly_onlytype',
            component: () => import('../pages/AddPayment.vue'),
        },
        {
            path: '/addpayment/:type?value=:value',
            name: 'addpayment_quickly',
            component: () => import('../pages/AddPayment.vue'),
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
