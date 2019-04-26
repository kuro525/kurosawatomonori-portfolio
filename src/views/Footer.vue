<template>
    <footer>
        <a href="#">
            <span>&copy; {{this.date}} kurosawatomonori.com</span>
        </a>
    </footer>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Footer extends Vue {
        public date: number = 0;

        public created() {
            this.date = new Date().getFullYear();
        }
    }


</script>

<style scoped lang="scss">
    footer {
        height: 100px;
        a {
            text-decoration: none;

            span {
                font-size: 18px;
                color: #e4e4e4;
                text-align: center;
                display: block;
            }
        }
    }
</style>
