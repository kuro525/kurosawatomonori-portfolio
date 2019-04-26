<template>
<div>
    <section>
       <article v-for="content in contents ">
           <a href=""></a>
            <h2>{{ content.title}}</h2>
           <a href="" v-for="tag in content.tags">{{ tag }}</a>
           <div v-html="content.content"></div>
           <br><br><br>
       </article>
    </section>
</div>
</template>

<script >

    import {app} from '../main';

    export default {
        name: "Portfolio",
        data(){
            return{
                contents:[],
            }
        },
        methods: {
            hoge: function () {
                app.content.get('portfolio')
                    .then(response => {
                        console.log(response);
                        Object.keys(response).forEach((key) => {

                            // console.log(key);
                            console.log(response[key].content);
                            // console.log(response[key].tag);
                            // console.log(response[key].date);
                            // console.log(response[key].content);
                            // console.log(response[key].public);
                            // contents.push(response[key]);
                            // this.contents.push(response[key]);
                            const res = response[key];
                            const content = {
                                'title': res.title,
                                'content': res.content,
                                'tags': res.tag,
                                'date': res.date,
                                'public': res.public,
                                'key': key,
                            };

                            console.log(content);
                            this.contents.push(content);
                        });
                    });
            },

        },
        mounted() {
        },
        created() {
            this.hoge();

        },
    };
</script>

<style scoped lang="scss">

</style>
