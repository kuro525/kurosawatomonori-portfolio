<template>
    <section>
        <h2>💻 スキル</h2>
        <v-expansion-panel popout >
            <v-expansion-panel-content
                    v-for="data in items"

            >
                <template v-slot:header>
                    <div class="skill">
                        <span>{{ data.name }}</span>
                        <div class="bar">
                            <div class="percent" v-bind:style="{ width: data.bar}"></div>
                        </div>
                    </div>
                </template>
                <v-card>
                    <time>{{ data.date }}〜</time>
                    <v-card-text>
                        {{ data.text }}
                    </v-card-text>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </section>
</template>

<script>
    export default {
        name: "ProfileSkills",
        data() {
            return {
                items: [
                    {
                        name: "HTML/CSS",
                        date: "2017年4月",
                        text: "現在、Web開発学科を専攻しているので、自身のほぼすべての作品で使用しています。",
                        bar: "85%"
                    },
                    {
                        name: "PHP",
                        date: "2017年10月",
                        text: "PHPはデーターベース操作やフォーム機能の作成などで使用していました。\n" +
                            "その他には、1年次に作成した、「FACE SPOT」でサーバーへの画像アップロード処理で使用しました。\n",
                        bar: "70%"
                    },
                    {
                        name: "Laravel",
                        date: "2018年5月",
                        text: "2年次に作成した、「KAO PASS」で主にAPIサーバーとして使用していました。\n" +
                            "チームでの開発でしたのでフレームワークを使ってみたいという気持ちがあり、技術選定をしてた中で、PHPのLaravelとRubyのRuby on Railsが最終的な候補として残り、チームの全員が元々学校の授業などでPHPに触れていたこともあり、Laravelを使用していくことに決めました。",
                        bar: "70%"
                    },
                    {
                        name: "JavaScript",
                        date: "2017年10月",
                        text: "JavaScriptは1年生の夏頃にProgateで学習をし始めました。\n" +
                            "1年次に作成した、「FACE SPOT」ではAjaxなどと一緒に使用し、画面上のコンテンツを動的に切り替えたり、アニメーションを付けたりといった処理で使用しました。",
                        bar: "80%"
                    },
                    {
                        name: "TypeScript",
                        date: "2019年5月",
                        text: "現在勉強中",
                        bar: "20%"
                    },
                    {
                        name: "Vue.js (Nuxt.js)",
                        date: "2018年10月",
                        text: "Vue.jsは2年次に作成した、「KAO PASS」のフロントエンドでSPAに対応させる為に使用しました。\n" +
                            "その他には、自身のポートフォリオサイトでの使用や、個人的に作成しているアプリケーションのフロントエンドで使用しています。",
                        bar: "70%"
                    },
                    {
                        name: "Firebase",
                        date: "2019年3月",
                        text: "Firebaseに関しましては、サーバーの構築やメンテナンスから開放されアプリケーション開発に集中できるようになったと感じるので、自身のポートフォリオサイトや現在開発中のアプリケーションなどに導入して使用しています。\n" +
                            "さらにFirebaseのFirestoreというデータベースでは、データベースに更新があったときにのみリアルタイムでデータを取得できるなどといった素晴らしい機能があるので、\n" +
                            "その機能を活かせるアプリケーションを考えており、現在作成しています。",
                        bar: "60%"
                    },
                    {
                        name: "GraphQL",
                        date: "2019年5月",
                        text: "現在勉強中",
                        bar: "2%"
                    },
                    {
                        name: "MySQL",
                        date: "2017年10月",
                        text: "学校の授業内や2年次に作成した、「KAO PASS」でのデータベースでMySQLを使用しました。\n" +
                            "「KAO PASS」では、 データベースの操作を直感的に行えるEloquentを使用しデーターベース操作を行っていました。",
                        bar: "70%"
                    },
                    {
                        name: "NoSQL",
                        date: "2019年3月",
                        text: "NoSQLに関しては現在FirebaseのCloud Firestoreを使用していて、自身のポートフォリオサイトのお問い合わせ内容や、コンテンツの管理などに使用しています。\n" +
                            "Firestoreでは、データベースに更新があったときにのみリアルタイムでデータを取得できる事に感動し、リアルタイム性が必要なチャットアプリを最初の練習として作成しました。\n" +
                            "データーベース設計がこれまで使っていたMySQLなどのRDBMSとはかなり違っているので、その辺りを現在勉強している段階です。",
                        bar: "50%"
                    },
                    {
                        name: "Docker",
                        date: "2018年6月",
                        text: "現在勉強中",
                        bar: "20%"
                    },
                    {
                        name: "Git",
                        date: "2018年6月",
                        text: "チーム開発の際や個人プロジェクトのソースコード管理に使用しています。\n" +
                            "2年次の学内コンテストではチーム開発をするとの事だったので、それを基にgithubでのソースコード管理の学習を始めました。",
                        bar: "70%"
                    },

                ]
            }
        }
    };
</script>

<style scoped lang="scss">
    h2 {
        margin-bottom: 20px;
        font-size: 24px;
    }

    section {
            padding: 20px 0;
        .skill {
            margin-bottom: 15px;

            span {
                display: block;
                margin-bottom: 3px;
            }

            .bar {
                $barHeight: 8px;
                background-color: #dcdcdc;
                width: 100%;
                height: 8px;
                border-radius: $barHeight;

                .percent {
                    height: 100%;
                    background-color: #ffd891;
                    border-radius: $barHeight 0 0 $barHeight;
                }
            }

        }
    }


    time {
        color: #333333;
        padding-left: 16px
    }
</style>
