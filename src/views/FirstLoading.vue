<template>
    <div class="firstLoading">
        <svg>
            <text x="50%" y="30%" font-size="45" font-family="Merriweather" class="textline name">Tomonori kurosawa</text>
            <text x="50%" y="65%" font-size="30" font-family="Merriweather" class="textline dev">Web Developer</text>

        </svg>
    </div>
</template>

<script lang="ts">
    export default {
        name: "FirstLoading",
    };
</script>

<style scoped lang="scss">

    @media screen and (max-width: 480px) {
        .name {
            font-size: 30px;
        }
        .dev {
            font-size: 25px;
        }
    }


    .firstLoading {
        font-weight: 600;
        position: fixed;
        top: 0;
        /*background-color: red;*/
        background-image: url("https://firebasestorage.googleapis.com/v0/b/portfolio-161c4.appspot.com/o/flamelink%2Fmedia%2Frdwm7HoWHwwzgD2kajBp_IMGP1829.jpg?alt=media&token=0283b53a-0880-4a29-bc30-8dc44f366fd8");
        background-size: cover;
        /*opacity: 0.7;*/
        height: 100vh;
        width: 100vw;
        z-index: 10;

        display: grid;
        justify-content: center;
        align-items: center;

        svg {
            width: 500px;
            height: 150px;

            .textline {
                text-anchor: middle;
                /*stroke: #fff;*/
                fill: rgba(255, 255, 255, 0);
                /*fill: none;*/
                stroke-dasharray: 150%;
                stroke-width: 0.7px;
                animation: stroke-anim 4.5s 0.7s linear;

            }

            @keyframes stroke-anim {

                0%{
                    stroke: #fff;
                    stroke-dashoffset: 155%;
                    fill:none;
                }
                40%{
                    stroke: #fff;

                    stroke-dashoffset: 100%;
                    fill: transparent;

                }

                60% {
                    stroke: #fff;

                }
                80%{
                    fill: rgba(255, 255, 255, 0.8);

                }
                100%{
                    stroke: #fff;
                    fill: rgba(255, 255, 255, 1);

                }
            }
        }
    }
</style>
