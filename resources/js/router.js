import Vue from 'vue'
import VueRouter from "vue-router";
import OnePageComponent from "./components/OnePageComponent";
import TwoPageComponent from "./components/TwoPageComponent";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'OnePageComponent',
            component: OnePageComponent
        },
        {
            path: '/two',
            name: 'TwoPageComponent',
            component: TwoPageComponent
        }
    ]
})
