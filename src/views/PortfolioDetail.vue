<template>
    <div>
        <h1>{{content.title}}</h1>
        <p>{{content.date | dayFormat}}</p>
        <img :src="content.img | imgUrl('1080_9999_100')" alt="">
        <a href="" v-for="tag in content.tags">
            #{{ tag }}
        </a>

        <div v-html="content.content"></div>



    </div>
</template>

<script>
    export default {
        name: "PortfolioDetail",

        data(){
            return{
                content:null,
            }
        },


        created() {
            const url = this.$route.params.id;
            const contents = this.$store.state.contents;

            const content = contents.filter((detail) => {
                console.log(detail);
                return detail.url === url;
            });

            this.content = content[0];

        }
    }

</script>

<style scoped lang="scss">

</style>
