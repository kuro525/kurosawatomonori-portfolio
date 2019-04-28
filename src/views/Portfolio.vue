<template>
    <div>
        <section>
            <article v-for="content in this.$store.state.contents ">
                <a href=""></a>
                <router-link :to="content.url | linkFormat">
                    {{ content.url | linkFormat }}
                </router-link>
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
            return {};
        },

        filters: {
            linkFormat(url: string){


                return `portfolio/${url}`
            }
        },
        // methods: {},
        // mounted() {},
        // created() {},
    };
</script>

<style scoped lang="scss">

</style>
