<template>
    <div class="carouselWrap">
        <carousel
                :autoplay="true"
                :loop="true"
                easing=ease-out
                :per-page=1
                :autoplayTimeout="5000"
                paginationActiveColor='#818181'
                paginationColor='#c1c1c1'
                :paginationSize='5'
                ref="carousel"
                v-on:pageChange="pageChanged"
        >
            <slide v-for="(content, index) in this.$store.state.contents" :key="index">
                <router-link :to="`Portfolio/${content.url }`"></router-link>
                <img v-if="content.img" :src="content.img | imgUrl('350_9999_100')" alt="" class="back">
                <img v-if="content.img" :src="content.img | imgUrl('1080_9999_100')" alt="" class="topimg">
                <div class="info">
                    <svg>
                        <text x="10%" y="85%" :class="{ textline:index === page }">{{content.title}}</text>
                    </svg>
                </div>
            </slide>
        </carousel>

        <div class="bottom">
            <span></span>
        </div>
    </div>
</template>

<script>
    import {Carousel, Slide} from 'vue-carousel';

    export default {
        name: "CarouselComponent",
        components: {
            Carousel,
            Slide,
        },
        data() {
            return {
                page: 0,

            }
        },

        watch: {
            pageNo() {
                this.pageChanged();
            }
        },
        methods: {
            pageChanged: function (val) {
                this.page = val;
            },
        },
    };
</script>

<style scoped lang="scss">

    @media screen and (max-width: 480px) {
        .textline {
            font-size: 30px;
            animation: stroke-anim 3s linear;
        }

    }

    @media screen and (min-width: 481px) {
        .textline {
            font-size: 50px;
            animation: stroke-anim 5s linear;
        }
    }

    @media screen and (min-width: 897px) {
        .VueCarousel-slide {
            height: 380px;
        }
    }

    .carouselWrap {
        position: relative;

        .VueCarousel-slide {
            /*max-height: 380px;*/
            position: relative;
            margin-top: 30px;
            overflow: hidden;

            background-color: #000;

            a {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                cursor: pointer;
                z-index: 1;
            }

            .topimg {
                position: relative;
                display: block;
                /*object-fit: contain;*/
                object-fit: contain;
                max-height: 100%;

                width: auto;
                max-width: 100%;
                height: auto;
                margin: 0 auto;
                box-shadow: 0 0 30px black;
            }

            .back {
                position: absolute;
                top: 0;
                width: 100%;
                object-fit: cover;
                filter: blur(10px);
                opacity: 0.6;

            }


            .info {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;

                svg {
                    position: absolute;
                    width: 100%;
                    height: 100%;

                    .textline {
                        stroke: #fff;
                        fill: rgba(255, 255, 255, 0.2);
                        stroke-dasharray: 150%;
                        stroke-width: 1px;
                    }

                    @keyframes stroke-anim {
                        0% {
                            stroke-dashoffset: 155%;
                            fill: transparent;
                        }
                        100% {
                            fill: rgba(255, 255, 255, 0.2);
                            stroke-dashoffset: 100%;

                        }
                    }
                }
            }
        }

        .bottom {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 35px;
            background-color: rgba(0, 0, 0, 0.3);

            span {
                position: absolute;
                top: -5px;
                left: 50%;
                width: 20px;
                height: 20px;
                margin-left: -10px;
                border-left: 2px solid #fff;
                border-bottom: 2px solid #fff;
                transform: rotate(-45deg);
                animation: sdb 2s infinite;
                box-sizing: border-box;
            }

            @keyframes sdb {
                0% {
                    transform: rotate(-45deg) translate(0, 0);
                    opacity: 0;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    transform: rotate(-45deg) translate(-10px, 10px);
                    opacity: 0;
                }
            }
        }
    }
</style>
