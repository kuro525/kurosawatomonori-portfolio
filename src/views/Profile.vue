<template>
    <article class="profile">
        <section class="about">
            <h2>👨🏻‍💻 Profile</h2>
            <p>
                初めまして。黒澤 智倫<a href="https://twitter.com/kurosawa525" rel="noopener" target="_blank" title="Twitter">(＠kurosawa525)</a>と申します。
                1997年生まれの{{age}}歳。
                HAL東京と言う専門学校でIT学部 Web開発学科を専攻している3年生です。(2021年卒業予定)
            </p>
            <p>
                <!--主にWebを中心とした勉強をしていて、最近ではFirebaseやNuxt.js、GraphQLなどの技術に興味があるのでそれらを用いてPWAに対応したWebアプリケーションを開発しています。-->
                主にWebを中心とした勉強をしていて、最近ではFirebaseやNuxt.jsなどの技術に興味があるのでそれらを用いてSPAやPWAに対応したWebアプリケーションを開発しています。
            </p>
            <p>
                「常に新しい技術への好奇心を持ち、必要なスキルをその都度身につけられる」そんなエンジニアを目指し日々勉強しています。
            </p>
        </section>
        <section>
            <h2>🤔 この先やってみたいこと</h2>
            <p>
                自分は人に喜んでもらう事が好きなので、少しでも多くの人が日々の生活を便利にそして楽しくなれるようなサービスの開発をしたいです。
            </p>

        </section>

        <section>
            <h2>😆 趣味</h2>
            <p>
                趣味はドライブ、カフェ巡り、映画館などに行ったりするのが好きです。
            </p>
            <p>
                最近は写真を撮ることにもハマっていて綺麗に撮れた写真はinstagram
                <a href="https://www.instagram.com/kuro.photos" target="_blank" rel="noopener" title="instagram">(kuro.photos)</a>
                に投稿しています！
            </p>
        </section>

        <skills />




        <section class="contest">
            <h2>🏆 受賞歴</h2>
            <ul>
                <li>
                    <span>2018</span>
                    HAL東京 進級制作展「HEW 2018」 金賞
                </li>
                <li>
                    <span>2019</span>
                    HAL東京 進級制作展「HEW 2019」 IT大賞
                </li>
            </ul>
        </section>
        <section class="Certificate">
            <h2>🖊 資格</h2>
            <ul>
                <li>
                    <span>2016</span>
                    調理師免許
                </li>
                <li>
                    <span>2019</span>
                    基本情報技術者
                </li>

            </ul>
        </section>
        <section class="sns">
            <h2>📣 SNS</h2>
            <a href="https://twitter.com/kurosawa525" target="_blank" rel="noopener" class="fa-stack" title="Twitterでフォロー">
                <i class="fab fa-twitter fa-stack-2x"></i>
            </a>
            <a href="https://www.instagram.com/mono.kuro_/" target="_blank" rel="noopener" class="fa-stack" title="instagramでフォロー">
                <i class="fab fa-instagram fa-stack-2x"></i>
            </a>
            <a href="https://github.com/kuro525" target="_blank" rel="noopener" class="fa-stack" title="Github">
                <i class="fab fa-github fa-stack-2x"></i>
            </a>
            <a href="https://qiita.com/kurosawatomonori" target="_blank" rel="noopener" class="fa-stack" title="Qiita">
                <i class="fas fa-square fa-stack-2x" ></i>
                <i class="fas fa-search fa-stack-1x fa-inverse fa-2x"></i>
            </a>
        </section>
    </article>

</template>

<script>
    import Skills from "./ProfileSkills.vue"
    import moment from "moment"

    export default {
        name: "Profile",
        components: {
            Skills
        },
        data() {
            return {
                age: 22
            }
        },
        methods: {
            Birthday() {
                const from = moment('1997-05-25')
                const to = moment()
                this.age = to.diff(from, 'year')
            }
        },
        created() {
            this.Birthday()
        }
    };
</script>

<style scoped lang="scss">
    section {
        margin-bottom: 60px;

        h2 {
            margin-bottom: 20px;
            font-size: 24px;
        }

        p {
            line-height: 1.6;

            a {
                color: #08c;
                text-decoration: none;
            }

        }
    }



    .contest, .Certificate{
        ul {
            list-style: none;
            padding: 0;
            li {
                margin-bottom: 20px;
                font-size: 16px;

                span {
                    color: #999;
                    display: block;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 1;
                    margin-bottom: 6px;
                }
            }
        }
    }

    .sns {
        a {
            margin-right: 16px;
            color: #000;
        }
    }


    article {
        max-width: 800px;
        margin: 0 auto;
        padding: 30px 20px;

    }

    section{
        margin: 0 auto;
        padding: 20px 0;
    }
</style>
