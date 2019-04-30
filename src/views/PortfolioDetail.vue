<template>
    <main>
        <article v-if="content !=null">
            <header>
                <time>{{content.date | dayFormat}}</time>
                <h1>{{content.title}}</h1>
                <div class="tag">
                    <a href="" v-for="tag in content.tags">
                        #{{ tag }}
                    </a>
                </div>
            </header>
            <div class="top">
                <img v-if="content.img != null" :src="content.img | imgUrl('1080_9999_100')" alt="" class="back">
                <img v-if="content.img != null" :src="content.img | imgUrl('1080_9999_100')" alt="" class="topimg">
                <h1>{{content.title}}</h1>
            </div>
            <div class="content" v-html="content.content">

            </div>


        </article>
    </main>

</template>

<script>
    export default {
        name: "PortfolioDetail",

        data() {
            return {
                content: null,
            }
        },


        computed: {
            foo() {
                return this.$store.state.contents;
            },
        },

        watch: {
            foo() {
                this.getData();
            },
        },

        methods: {
            getData() {
                const url = this.$route.params.id;
                const contents = this.$store.state.contents;

                const content = contents.filter((detail) => {
                    return detail.url === url;
                });

                this.content = content[0];

            },
        },

        created() {
            if (this.$store.state.contents != null) {
                this.getData();
            }
        },

    };

</script>

<style scoped lang="scss">
    header {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 2rem;

        time {
            display: block;
            font-size: 14px;
            color: #999;
            margin-bottom: 1.2rem;
        }

        h1 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 1.2rem;
        }

        .tag {
            a {
                font-size: 16px;
                margin-right: 10px;
                font-weight: 500;
                text-decoration: none;
            }

            margin-bottom: 3rem;

        }
    }


    .top {
        position: relative;
        background-color: #fff;
        overflow: hidden;
        margin-bottom: 3rem;

        img {
            height: 100%;
            margin: auto;
        }

        .back {
            width: 100%;
            object-fit: cover;
            filter: blur(10px);
            opacity: 0.9;
        }

        .topimg {
            position: absolute;
            width: auto;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            box-shadow: 0 0 30px black;
        }

        h1 {
            width: 100%;
            position: absolute;
            bottom: 0;
            padding: 15px 0;
            color: #ffffff;
            text-align: center;
            background-color: rgba(0, 0, 0, 0.5);
        }
    }

    .content {
        max-width: 900px;
        margin: 0 auto 3rem;
        padding: 0 2rem ;
    }
</style>
