import Vue from 'vue'
import Router from 'vue-router'

import Sales from './views/Sales'
import Loans from './views/Loans'

Vue.use(Router)

let routes = [
    {
        path: '/sales',
        component: Sales
    },
    {
        path: '/loans',
        component: Loans
    }
]

export default new Router({
    routes,
    mode: 'history'
})