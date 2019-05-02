<template>
    <div>
        <h2>📙 Portfolio</h2>
        <carousel-component></carousel-component>
        <div class="list">
            <div class="contents">
                <article v-for="content in this.$store.state.contents ">
                    <router-link :to="`Portfolio/${content.url }`" class="link">
                        <figure>
                            <img v-if="content.img != null" :src="content.img | imgUrl('400_9999_100')" alt="">
                        </figure>

                        <header>
                            <time>{{content.date | dayFormat }}</time>
                            <h2>{{ content.entryTitle}}</h2>

                            <a v-for="tag in content.tags" class="tag">
                                #{{ tag }}
                            </a>

                        </header>

                    </router-link>
                </article>
            </div>
        </div>

    </div>
</template>

<script>
    import CarouselComponent from './CarouselComponent.vue'

    export default {
        name: "Portfolio",
        components: {
            CarouselComponent,
        },
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
        padding: 0 20px;
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

                    h2 {
                        margin: 0 0 20px 0;
                        color: #333;
                        font-size: 16px;
                        font-weight: 600;
                    }

                    a {
                        color: #333333;
                        font-size: 16px;
                        margin-right: 10px;
                        font-weight: 500;
                    }
                }
            }
        }
    }

</style>
