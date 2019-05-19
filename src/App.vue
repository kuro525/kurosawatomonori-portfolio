<template>
    <div id="app">
        <transition mode="out-in">

            <first-loading v-show="FirstLoading"></first-loading>
        </transition>

        <div v-show="!FirstLoading">
            <header-component></header-component>
            <navigation-menu-component></navigation-menu-component>
            <transition mode="out-in">
                <router-view></router-view>
            </transition>
            <footer-component></footer-component>
        </div>
    </div>
</template>

<script>
import HeaderComponent from "./views/Header.vue";
import FooterComponent from "./views/Footer.vue";
import NavigationMenuComponent from "./views/NavigationMenu.vue";
import FirstLoading from './views/FirstLoading.vue'

export default {
    components: {
        HeaderComponent,
        FooterComponent,
        NavigationMenuComponent,
        FirstLoading,
    },
    data() {
        return {
            FirstLoading: true
            // FirstLoading:false

        }
    },

    created() {
        this.$store.dispatch("setContents");

        setTimeout(() => {
            this.FirstLoading = false
        }, 4500)
    },
};


</script>

<style lang="scss">
    @import 'assets/style/transition';
</style>
