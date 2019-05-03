<template>
    <div :class="{loading:load}">
        <circle9 v-if="load"></circle9>
    </div>
</template>

<script>
    import {Circle9} from 'vue-loading-spinner'
    export default {
        name: "LoadingSpinnerComponent",
        components:{
            Circle9
        }
        ,
        props:["load"]
    };
</script>

<style scoped lang="scss">
    .loading{
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;
        /*background-color: #ffd891;*/
        background-color: #fff;
        display: grid;
        align-items: center;
        justify-content: center;
        z-index: 100;
    }
</style>
