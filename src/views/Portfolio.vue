<template>
    <div>
        <section>
            <article v-for="content in this.$store.state.contents ">
                <a href=""></a>
                <h2>{{ content.title}}</h2>
                <a href="" v-for="tag in content.tags">{{ tag }}</a>
                <div v-html="content.content"></div>
                <!--{{ content.img | imgUrl }}-->
                <img :src="content.img | imgUrl" alt="">

                <br><br><br>
            </article>
        </section>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Portfolio",
        data() {
            return {

            }
        },

        filters:{
            imgUrl(imgName){
                const size = '1080_9999_100';
                return `https://firebasestorage.googleapis.com/v0/b/portfolio-161c4.appspot.com/o/flamelink%2Fmedia%2Fsized%2F${size}%2F${imgName}?alt=media`;
            }
        },
        methods: {

        },
        mounted() {
        },
        created() {
        },
    };
</script>

<style scoped lang="scss">

</style>
