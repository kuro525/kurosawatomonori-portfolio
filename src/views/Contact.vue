<template>
    <div>
        <h2>📨 Contact</h2>
        <input
                type="text"
                v-model="company"
        ><br>
        <input
                type="text"
                v-model="nameKanji"
        ><br>
        <input
                type="text"
                v-model="nameKana"
        ><br>
        <input
                type="text"

                v-model="tel"
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

    import {db} from '@/main';

    export default {
        name: "Contact",
        data(){
            return{
                company:null,
                nameKanji:null,
                nameKana:null,
                tel:null,
                email:null,
                multiText:null,
            }
        },
        methods:{
          submit(){
              console.log('送信');
              //
              // db.collection('ContactMessage').add({
              //     company: this.company,
              //     nameKanji: this.nameKanji,
              //     nameKana: this.nameKana,
              //     tel: this.tel,
              //     email:this.email,
              //     multiText:this.multiText,
              // })
              //     .then((response) => {
              //         console.log('完了');
              //         console.log(response);
                      this.$router.push({path: '/Contact/Sent'});
                  //
                  // })
                  // .catch(e => {
                  //     console.log('失敗');
                  //     console.log(e);
                  // });

          },


        },
    };
</script>

<style scoped lang="scss">

</style>
