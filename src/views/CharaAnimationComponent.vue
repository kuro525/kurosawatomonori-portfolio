<template>
    <div class="info">
        <svg>
            <text x="50%" y="27%" class="textline">{{title}}</text>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "CharaAnimationComponent",
        props:["title","index"]
    };
</script>

<style scoped lang="scss">
    @media screen and (max-width: 480px) {
        .textline {
            font-size: 40px;
            animation: stroke-anim 5s linear;
        }
        .info{
            height: 40px;
        }
        @keyframes stroke-anim {
            0% {
                stroke-dashoffset: 155%;
                fill: transparent;
            }
            50% {
                fill: rgba(255, 255, 255, 0.2);
                stroke-dashoffset: 100%;

            }
        }

    }

    @media screen and (min-width: 481px) {
        .textline {
            font-size: 40px;
            animation: stroke-anim 5s linear;
        }
        @keyframes stroke-anim {
            0% {
                stroke-dashoffset: 155%;
                fill: transparent;
            }
            60% {
                fill: rgba(255, 255, 255, 0.2);
                stroke-dashoffset: 100%;

            }
        }
    }

    @media screen and (min-width: 897px) {
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





    .info {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50px;
        display: grid;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.3);
        svg {
            width: 500px;
            height: 150px;

            .textline {
                text-anchor: middle;

                stroke: #fff;
                fill: rgba(255, 255, 255, 0.2);
                stroke-dasharray: 150%;
                stroke-width: 1px;
            }
        }
    }
</style>
