<template>
    <div v-html="html" class="PortfolioDetailContent"></div>
</template>

<script lang="ts">
    export default {
        name: "PortfolioDetailContent",
        props: ["html"]

    };
</script>

<style lang="scss">


    .PortfolioDetailContent{
        max-width: 900px;
        margin: 0 auto 5rem;
        padding: 0 2rem;
        position: relative;
        h2{
            padding: 1rem;
            border-top: 2px solid #333;
            border-bottom: 2px solid #333;
            margin-bottom: 2rem;
            font-size: 24px;
            text-align: center;
            font-weight: 600;
        }
        h3{
            width: 95%;
            padding-top: 1rem;
            border-top: 2px solid #333;
            margin-top: 50px;
            margin-bottom: 1.5rem;
            font-size: 24px;
            font-weight: 600;
        }
        h4{
            font-size: 22px;
            padding: .2rem 1.5rem;
            border-left: 4px solid #333;
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
        }
        p{
            line-height: 2;
            margin-bottom: 2rem;
        }

        img{
            display: block;
            width: 500px;
            margin: 0 auto;
            max-width: 100%;
        }
    }

</style>
