<template>
    <section>
        <h2>📨 Contact Me</h2>
        <p>
            お問い合わせ、アポイント等ございましたら、下記のフォームまたはメールアドレスよりご連絡下さい。
        </p>
        <p>
            <strong>「kurosawa.developer[at]gmail.com」</strong>
            ([at]を@に変換）
        </p>
        <p>
            問い合わせフォーマット以外では<a href="https://twitter.com/kurosawa525" target="_blank" rel="noopener" title="Twitter">Twitterアカウント</a>のDMからご連絡頂いても問題ございません。
        </p>
        <span>※すべて必須項目です。</span>
        <v-text-field
                v-model="company"
                label="御社名"
                height="40px"
                :error="input.company"
                :rules="[rules.required]"
                autofocus
        ></v-text-field>
        <v-text-field
                v-model="name"
                label="名前"
                height="40px"
                :error="input.name"
                :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
                v-model="email"
                label="メールアドレス"
                height="40px"
                :error="input.email"
                :rules="[rules.required, rules.emailRules]"
        ></v-text-field>
        <v-textarea
                v-model="multiText"
                label="記入欄"
                :error="input.multiText"
                :rules="[rules.required]"
                rows="10"
        ></v-textarea>

        <div class="submit">
            <button type="submit" value="送信" v-bind:disabled="disabled" class="submit_btn" @click="check()">
                {{buttonText}}
            </button>
            <div class="load">
                <v-progress-circular
                        v-if="disabled"
                        :size="40"
                        indeterminate
                        color="amber"
                ></v-progress-circular>
            </div>
        </div>

        <h3>個人情報の扱いについて</h3>
        <p class="personalInfo">
            ご入力された個人情報等はご連絡以外の目的で使用することはありません。
            安全性を確保するために使用後は適切に削除し対策も行っています。
            また、法令に基づき開示を求められた場合を除き第三者に開示することもありません。
        </p>
    </section>

</template>

<script lang="ts">
    import {db} from "@/main";
    import axios from "axios";
    import {load} from "recaptcha-v3";


    export default {
        name: "Contact",
        data() {
            return {
                buttonText: "送信",
                company: "",
                name: "",
                email: "",
                multiText: "",
                disabled: false,
                input: {
                    company: false,
                    name: false,
                    email: false,
                    multiText: false,
                },
                params: {
                    token: "",
                },
                rules: {
                    required: value => !!value || "必須項目です。",
                    emailRules: value => /.+@.+/.test(value) || "メールアドレスを入力してください"

                },
            };
        },
        watch: {
            company(company) {
                if (company != "") {
                    this.input.campany = false;
                }
            },
            name(name) {
                if (name != "") {
                    this.input.name = false;
                }
            },
            email(email) {
                if (email != "") {
                    this.input.email = false;
                }
            },
            multiText(multiText) {
                if (multiText != "") {
                    this.input.multiText = false;
                }
            }
        },
        methods: {

            check() {
                if (this.company === "") {
                    this.input.campany = true;
                }
                if (this.name === "") {
                    this.input.name = true;
                }
                if (this.email === "") {
                    this.input.email = true;
                }
                if (this.multiText === "") {
                    this.input.multiText = true;
                }

                if (this.input.campany === false &&
                    this.input.name === false &&
                    this.input.email === false &&
                    this.input.multiText === false) {

                    this.disabled = true;
                    this.buttonText = "";
                    this.submit();
                }

            },
            submit() {
                const url = "https://asia-northeast1-portfolio-161c4.cloudfunctions.net/firestoreAdd";
                const data = {
                    data: {
                        token: this.params.token,
                        company: this.company,
                        name: this.name,
                        email: this.email,
                        multiText: this.multiText,
                    }
                };


                axios.post(url, data)
                    .then(() => {
                        this.$router.push({path: "/Contact/Sent"});
                    })
                    .catch(e => {
                        console.log(e);
                    });


                db.collection("MessageBackup").add({
                    company: this.company,
                    name: this.name,
                    email: this.email,
                    multiText: this.multiText,
                    time: new Date(),
                })
                    .then(() => {
                        // console.log("MessageBackup_完了");
                    })
                    .catch(e => {
                        console.log("失敗");
                        console.log(e);
                    });
            },


            async asyncFunction() {
                const recaptcha = await load(process.env.VUE_APP_RECAPTCHA_KEY);
                this.params.token = await recaptcha.execute("homepage");
            }


        },
        mounted() {
            this.asyncFunction();
        }
    };
</script>

<style scoped lang="scss">
    section {
        padding: 2rem;
        max-width: 700px;
        margin: 0 auto;

        h2 {
            margin-bottom: 20px;
        }

        span {
            display: block;
            margin-top: 50px;
            font-size: 12px;
            color: #616161;
        }

        .submit {
            width: 100%;
            margin: 50px 0;
            position: relative;

            .submit_btn {
                font-size: 18px;
                background-color: #1f2533;
                color: #fff;
                font-weight: bold;
                width: 300px;
                height: 60px;
                border-radius: 20px;
                position: relative;
                z-index: 1;
                display: block;
                margin: 0 auto;
                cursor: pointer;
                text-align: center;
                border: none;
                outline: none;
                transition: .4s;

                &:hover {
                    /*color: #000;*/
                    background-color: #F8BA00;
                }

                &:disabled {
                    background-color: #606060;
                    cursor: not-allowed;
                }
            }

            .load {
                position: absolute;
                top: 10px;
                left: calc(50% - 20px);
                z-index: 1;
            }
        }

        h3 {
            margin-bottom: 1rem;
        }

        .personalInfo {
            font-size: 14px;
            margin-bottom: 50px;
        }
    }
</style>
