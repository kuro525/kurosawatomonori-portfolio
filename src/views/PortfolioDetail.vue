<template>
    <main>
        <article v-if="content !=null">
            <header>
                <time>{{content.date | dayFormat}}</time>
                <h1>{{content.entryTitle}}</h1>
                <div class="tag">
                    <span v-for="tag in content.tags">
                        {{ tag }}
                    </span>
                </div>
            </header>
            <div class="top">
                <img @load="isLoading = false" v-if="content.img != null" :src="content.img | imgUrl('1080_9999_100')" alt="" class="back">
                <img v-if="content.img != null" :src="content.img | imgUrl('1080_9999_100')" alt="" class="topimg">
                <chara-animation-component v-if="!isLoading" :title="content.title"></chara-animation-component>

            </div>
            <portfolio-detail-content :html="content.content"></portfolio-detail-content>

        </article>
        <loading-spinner :load="isLoading"></loading-spinner>
    </main>

</template>

<script>
    import CharaAnimationComponent from './CharaAnimationComponent.vue'
    import PortfolioDetailContent from './PortfolioDetailContent.vue'
    import LoadingSpinner from './LoadingSpinnerComponent.vue'

    export default {
        name: "PortfolioDetail",
        components: {
            PortfolioDetailContent,
            CharaAnimationComponent,
            LoadingSpinner
        },

        data() {
            return {
                content: null,
                isLoading: true
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
            margin: 1.2rem 0;
        }

        h1 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 1.2rem;
        }

        .tag {
            span {
                color: #525252;
                font-size: 14px;
                margin-right: 0.5rem;
                font-weight: 500;

                border: solid 1px #cdcdcd;
                border-radius: 20px;
                padding: 0.2rem 0.8rem;
                margin-bottom: 0.5rem;
                display: inline-block;
            }

            margin-bottom: 2rem;

        }
    }


    .top {
        position: relative;
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

    @media screen and (max-width: 480px) {
        header {
            h1 {
                font-size: 20px;
            }
        }
    }

    @media screen and (min-width: 897px) {

        .top {
            height: 500px;

        }
    }
</style>
