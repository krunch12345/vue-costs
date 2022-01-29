import Vue from 'vue'
import Vuex from 'vuex'
import category from './category'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
    },
    
    mutations: {
        SET_PAYMENTS_LIST(state, paymentsList) {
            state.paymentsList = paymentsList
        },
        
        ADD_NEW_PAYMENT(state, payment) {
            state.paymentsList.push(payment)
        },
    },
    
    getters: {
        paymentsList: ({ paymentsList }) => paymentsList,
        paymentsListTotalAmount: ({ paymentsList }) => (
            paymentsList.reduce(
                (total, { value }) => total + +value,
                0,
            )
        )
    },
    
    actions: {
        fetchData({ commit }) {
            setTimeout(
                () => {
                    const paymentsList = [
                        {
                            date: '2020-02-28',
                            category: 'Food',
                            value: 169,
                        },
                        {
                            date: '2020-03-03',
                            category: 'Transport',
                            value: 360,
                        },
                        {
                            date: '2020-05-10',
                            category: 'Food',
                            value: 532,
                        },
                        {
                            date: '2020-06-16',
                            category: 'Food',
                            value: 897,
                        },
                        {
                            date: '2020-07-07',
                            category: 'Transport',
                            value: 363,
                        },
                        {
                            date: '2020-07-10',
                            category: 'Food',
                            value: 52,
                        },
                        {
                            date: '2020-07-11',
                            category: 'Food',
                            value: 1,
                        },
                        {
                            date: '2020-08-03',
                            category: 'Transport',
                            value: 30,
                        },
                        {
                            date: '2020-08-10',
                            category: 'Food',
                            value: 782,
                        },
                        {
                            date: '2020-09-05',
                            category: 'Food',
                            value: 199,
                        },
                    ]
                
                    commit('SET_PAYMENTS_LIST', paymentsList)
                },
                1000,
            )
        },
    },
    
    modules: {
        category,
    }
})
