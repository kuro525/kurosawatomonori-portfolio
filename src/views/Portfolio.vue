<template>
    <div>
        <section>
            <article v-for="content in contents ">
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

<script>

    import {app} from '../main';
    import {db} from '../main';


    export default {
        name: "Portfolio",
        data() {
            return {
                contents: [],
            }
        },

        filters:{
            imgUrl(imgName){
                const size = '1080_9999_100';
                return `https://firebasestorage.googleapis.com/v0/b/portfolio-161c4.appspot.com/o/flamelink%2Fmedia%2Fsized%2F${size}%2F${imgName}?alt=media`;


            }
        },
        methods: {
            getData() {
                db.collection("fl_content").get()
                    .then((response) => {
                        response.forEach((data) => {

                            const path = data.data().img[0].path;

                            const content = {
                                'img': path,
                                'title': data.data().title,
                                'content': data.data().content,
                                'tags': data.data().tag,
                                'date': data.data().date,
                                'public': data.data().public,
                            };
                            this.contents.push(content);

                        });
                    })
                    .then(() => {
                        this.getImgUrl()
                    });

            },
            getImgUrl() {

                this.contents.forEach(content => {

                    db.doc(content.img).get()
                        .then(response => {

                            content.img = response.data().file;

                            // console.log(content.img)
                        });


                })
                // console.log(this.contents)
            }


        },
        mounted() {

            // console.log(this.$store.state.contents)
        },
        created() {
            this.getData();
        },
    };
</script>

<style scoped lang="scss">

</style>
