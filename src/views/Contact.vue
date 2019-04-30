<template>
    <div>
        <h2>📨 Contact</h2>
        <input
                type="text"
                v-model="company"
        ><br>
        <input
                type="text"
                v-model="name"
        ><br>

        <input
                type="text"
                v-model="email"
        ><br>
        <textarea
                v-model="multiText"
                rows="10"
                name="a"

        ></textarea><br>
        <div class="submit">
            <input type="submit" value="送信" class="submit_btn" @click="submit()">
        </div>
    </div>

</template>

<script lang="ts">
    import {db} from "@/main";
    import axios from "axios";
    import {load} from "recaptcha-v3";


    export default {
        name: "Contact",
        data() {
            return {
                company: null,
                name: null,
                email: null,
                multiText: null,
                params: {
                    token: "",
                },
            };
        },
        methods: {
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

</style>
