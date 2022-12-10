<template>
    <div>
        <router-link to="/">One</router-link>
        <router-link to="/two">Two</router-link>
        <router-view/>
    </div>
</template>

<script>
import OnePageComponent from "../OnePageComponent";
import TwoPageComponent from "../TwoPageComponent";
export default {
    name: "AppLayoutsComponent",
    components: {
        OnePageComponent,
        TwoPageComponent
    }
}
</script>

<style scoped>

</style>
