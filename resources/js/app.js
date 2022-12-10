import Vue from 'vue'
import router from "./router";
import AppLayoutsComponent from "./components/layouts/AppLayoutsComponent";


const app = new Vue({
    el: '#app',
    components: {
        AppLayoutsComponent
    },
    router
});
