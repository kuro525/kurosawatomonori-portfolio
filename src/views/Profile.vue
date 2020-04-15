<template>
    <article class="profile">
        <section class="about">
            <h2>👨🏻‍💻 Profile</h2>
            <p>
                初めまして。黒澤 智倫<a href="https://twitter.com/kurosawa525" rel="noopener" target="_blank" title="Twitter">(＠kurosawa525)</a>と申します。
                1997年生まれの{{age}}歳。
                HAL東京と言う専門学校でIT学部 Web開発学科を専攻しています。(2021年卒業予定)
            </p>
            <p>
                主にWebを中心とした勉強をしていて、最近ではFirebaseやNuxt.jsなどの技術に興味があるのでそれらを用いてSPAやPWAに対応したWebアプリケーションを開発しています。
            </p>
            <p>
                こちらのポートフォリオサイトでも、主にVue.js や Firebaseを使用して、SPA x PWA x サーバーレス環境での開発を経験しました。
                ポートフォリオサイトで初めてPWAにも対応させることができ、まさにネイティブアプリの様なイメージで自分自身のサイトが作成できました。
            </p>
            <p
            >今後もこれらの技術を勉強する事に加え新しい技術なども積極的に学習し、取り入れていきたいと思っています。
            </p>
        </section>
        <section>
            <h2>🤔 この先やってみたいこと</h2>
            <p>
                将来のイメージでは、現在自分が得意と言えるフロントエンドをメインに、バックエンドからインフラ、UI・UXまでWeb系の幅広い技術を身につけ、多くの人が日々の生活を便利にそして楽しくなれるようなサービスの開発をしたいです。
            </p>
            <p>
                技術の移り変わりが早いWeb業界で最前線の中で働けるよう、「常に新しい技術への好奇心を持ち、必要なスキルをその都度身につけられる」そんなエンジニアを目指しています。
            </p>
            <p>
                そして、その時々によって変わる技術や環境の中で、より多くのユーザーに使ってもらえるプロダクトを作るため最適な技術・言語を提案できるテックリードのような存在になり、チームを引っ張って行けるようなエンジニアになりたいと考えています。
            </p>
        </section>

        <section>
            <h2>😆 趣味</h2>
            <p>
                趣味はドライブ、カフェ巡り、映画館などに行ったりするのが好きです。
            </p>
            <p>
                最近は写真を撮ることにもハマっていて綺麗に撮れた写真はinstagram
                <a href="https://www.instagram.com/kuro.photos" rel="noopener" target="_blank" title="instagram">(kuro.photos)</a>
                に投稿しています！
            </p>
        </section>

        <skills/>


        <section class="contest">
            <h2>🏆 受賞歴</h2>
            <ul>
                <li>
                    <span>2018</span>
                    <router-link to="/Portfolio/facespot">
                        HAL東京 進級制作展「HEW 2018」 金賞
                        <i class="fas fa-external-link-alt"></i>
                    </router-link>
                </li>
                <li>
                    <span>2019</span>
                    <router-link to="/Portfolio/kaopass">
                        HAL東京 進級制作展「HEW 2019」 IT大賞
                        <i class="fas fa-external-link-alt"></i>
                    </router-link>
                </li>
            </ul>
        </section>
        <section class="internship">
            <h2>🏢 インターンシップ参加企業</h2>
            <ul>
                <li>
                    <span>2019</span>
                    Fringe81株式会社
                </li>
                <li>
                    <span>2019</span>
                    株式会社エイチーム
                </li>
                <li>
                    <span>2019</span>
                    DMM WEBCAMP
                </li>
                <li>
                    <span>2019</span>
                    合同会社DMM.com
                </li>
                <li>
                    <span>2019</span>
                    チームラボエンジニアリング株式会社
                </li>
            </ul>
            <small>＊ 参加順</small>

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
            <a class="fa-stack" href="https://twitter.com/kurosawa525" rel="noopener" target="_blank"
               title="Twitterでフォロー">
                <i class="fab fa-twitter fa-stack-2x"></i>
            </a>
            <a class="fa-stack" href="https://www.instagram.com/mono.kuro_/" rel="noopener" target="_blank"
               title="instagramでフォロー">
                <i class="fab fa-instagram fa-stack-2x"></i>
            </a>
            <a class="fa-stack" href="https://github.com/kuro525" rel="noopener" target="_blank" title="Github">
                <i class="fab fa-github fa-stack-2x"></i>
            </a>
            <a class="fa-stack" href="https://qiita.com/kurosawatomonori" rel="noopener" target="_blank" title="Qiita">
                <i class="fas fa-square fa-stack-2x"></i>
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
        }
    }

    .contest, .Certificate, .internship {
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

                a {
                    color: #333333;
                }

                i {
                    padding: 0 10px;
                    color: #525252;
                }
            }
        }
    }

    .sns {
        a {
            margin-right: 16px;
            color: #333333;
        }
    }


    article {
        max-width: 800px;
        margin: 0 auto;
        padding: 30px 20px;

    }

    section {
        margin: 0 auto;
        padding: 20px 0;
    }
</style>
