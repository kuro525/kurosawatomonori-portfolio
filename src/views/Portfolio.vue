<template>
    <div>
        <section>
            <article v-for="content in this.$store.state.contents ">
                <router-link :to="`portfolio/${content.url }`">
                    {{ content.url }}
                </router-link>
                <h2>{{ content.title}}</h2>
                <a href="" v-for="tag in content.tags">
                    #{{ tag }}
                </a>
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
        // methods: {},
        // mounted() {},
        // created() {},
    };
</script>

<style scoped lang="scss">

</style>
