<template>
    <section id="content">
        <h2>📨 送信完了</h2>
        <h3>お問い合わせ内容を送信しました。</h3>
        <p>ご記入いただいたメールアドレス宛にのちほどご返信をお送りいたしますので、今しばらくお待ちください。</p>
        <p>お送りいただいたお問い合わせ内容によってはご返信までにお時間をいただく場合がございます。</p>
        <button @click="top">TOPへ</button>
    </section>
</template>

<script>
    export default {
        name: "ContactSent",
        methods: {
            top() {
                this.$router.push({path: "/"});
            }
        }
    };
</script>

<style scoped lang="scss">
    $color: #F8BA00;

    @media screen and (max-width: 480px) {
        h3 {
            font-size:19px;
        }
    }
    @media screen and (min-width: 481px) {
        h3{
            font-size: 22px;
        }
    }
    #content {
        max-width: 700px;
        margin: 0 auto;
        padding: 2rem;

        h2 {
            margin-bottom: 2rem;
        }

        h3 {
            text-align: center;
            margin-bottom: 2rem;
        }


        button {
            display: block;
            width: 200px;
            height: 50px;
            font-size: 18px;
            border-radius: 5px;
            margin: 50px auto;
            background-color: $color;
            text-decoration: none;
            outline: 0;
            cursor: pointer;
            transition: .4s;
            color: #fff;

            &:hover {
                background: #fff;
                color: #f8921b;
                border: solid 1px $color;
            }
        }

    }
</style>
