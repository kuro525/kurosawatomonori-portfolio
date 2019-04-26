<template>
    <div id="app">
        <header-component></header-component>
        <transition mode="out-in">
            <router-view></router-view>
        </transition>
        <footer-component></footer-component>
        <!--<router-link to="/">Home</router-link> |-->
        <!--<router-link to="/about">About</router-link>-->
        <!--<router-view/>-->
    </div>
</template>

<script lang="ts">
    import HeaderComponent from "./views/Header.vue";
    import FooterComponent from "./views/Footer.vue";




    export default {
        components: {
            HeaderComponent,
            FooterComponent,
        },
    };
</script>

<style lang="scss">

</style>
