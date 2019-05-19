<template>
    <div>
        <h2>📙 Portfolio</h2>
        <carousel-component :load="isLoading"></carousel-component>
        <div class="list">
            <div class="contents">
                <article v-for="content in this.$store.state.contents ">
                    <router-link :to="`Portfolio/${content.url }`" class="link">
                        <figure>
                            <img @load="loaded" v-if="content.img != null" :src="content.img | imgUrl('400_9999_100')"
                                 alt="">
                        </figure>

                        <header>
                            <time>{{content.date | dayFormat }}</time>
                            <h3>{{ content.entryTitle}}</h3>

                            <span v-for="tag in content.tags" class="tag">
                                {{ tag }}
                            </span>

                        </header>

                    </router-link>
                </article>
            </div>
        </div>
        <loading-spinner :load="isLoading"></loading-spinner>

    </div>
</template>

<script>
    import CarouselComponent from './CarouselComponent.vue'
    import LoadingSpinner from './LoadingSpinnerComponent.vue'

    export default {
        name: "Portfolio",
        components: {
            CarouselComponent,
            LoadingSpinner,
        },
        data() {
            return {
                isLoading: true
            }
        },
        methods: {
            loaded() {
                setTimeout(() => {
                    this.isLoading = false
                },300)
            }
        }
    };
</script>

<style scoped lang="scss">
    $width: 800px;

    @media screen and (min-width: 700px) {
        .contents {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (min-width: 897px) {
        .contents {
            grid-template-columns: repeat(3, 1fr);
        }
    }


    h2 {
        max-width: $width;
        margin: 2rem auto 0;
        /*padding: 0 20px;*/
    }

    .list {
        padding: 2rem;
        max-width: 1200px;
        margin: 3rem auto;

        .contents {
            display: grid;
            grid-gap: 3rem;
            margin-bottom: 3rem;

            .link {
                width: 100%;
                height: 100%;
                z-index: 1;
                cursor: pointer;
                position: relative;
                display: block;
                background-color: #fff;
                border-radius: 15px;
                box-shadow: rgba(112, 112, 112, 0.51) 3px 3px 10px 3px;
                transition: .4s ease-in-out;

                img {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    border-radius: 15px 15px 0 0;
                }

                header {
                    padding: 1rem;

                    time {
                        display: block;
                        font-size: 14px;
                        color: #999;
                        margin-bottom: 0.5rem;
                    }

                    h3 {
                        margin: 0 0 25px 0;
                        color: #333;
                        font-size: 16px;
                        font-weight: 600;
                    }

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
                }
            }
        }
    }

</style>
