<template>
    <div id="app">
        <header-component></header-component>
        <navigation-menu-component></navigation-menu-component>
        <transition mode="out-in">
            <router-view></router-view>
        </transition>
        <footer-component></footer-component>
        <!--<router-link to="/">Home</router-link> |-->
        <!--<router-link to="/about">About</router-link>-->
        <!--<router-view/>-->
    </div>
</template>

<script>
    import HeaderComponent from "./views/Header.vue";
    import FooterComponent from "./views/Footer.vue";
    import NavigationMenuComponent from "./views/NavigationMenu.vue";


    export default {
        components: {
            HeaderComponent,
            FooterComponent,
            NavigationMenuComponent,
        },

        created() {
            this.$store.dispatch("setContents");
        },
    };


</script>

<style lang="scss">
    @import 'assets/style/transition';
</style>
