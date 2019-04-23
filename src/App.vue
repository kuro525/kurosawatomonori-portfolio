<template>
    <div id="app">
        <header-component></header-component>
        <transition mode="out-in">
            <router-view></router-view>
        </transition>
        <!--<router-link to="/">Home</router-link> |-->
        <!--<router-link to="/about">About</router-link>-->
        <!--<router-view/>-->
    </div>
</template>

<script lang="ts">
    import HeaderComponent from "./views/Header.vue";


    export default {
        components: {
            HeaderComponent,
        },
    };
</script>

<style lang="scss">

</style>
