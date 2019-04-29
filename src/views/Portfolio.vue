<template>
    <div>
        <section>
            <article v-for="content in this.$store.state.contents ">
                <router-link :to="`Portfolio/${content.url }`">
                    {{ content.url }}
                </router-link>
                <h2>{{ content.title}}</h2>
                <a href="" v-for="tag in content.tags">
                    #{{ tag }}
                </a>
                <p>{{content.date | dayFormat }}</p>
                <img v-if="content.img != null" :src="content.img | imgUrl('350_9999_100')" alt="">
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
