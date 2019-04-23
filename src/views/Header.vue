<template>
    <div>
        <header class="Info">
            <div class="imgFilter">
                <img v-bind:src="myPicture" class="img_down" alt="myPicture">
                <img v-bind:src="myPicture" class="img_up" alt="myPicture">
            </div>
            <img v-bind:src="myPicture" class="faceImg" alt="myPicture">
            <h1 class="name">TOMONORI KUROSAWA</h1>
            <p class="job">Web Developer</p>
        </header>
        <nav>
            <ul>
                <li>
                    <router-link to="/Portfolio" exact-active-class="active">
                        <p class="ja">ポートフォリオ</p>
                        <p class="en">Portfolio</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/" exact-active-class="active">
                        <p class="ja">プロフィール</p>
                        <p class="en">Profile</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/Contact" exact-active-class="active">
                        <p class="ja">お問い合わせ</p>
                        <p class="en">Contact</p>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Header",
        data() {
            return {
                myPicture: 'https://firebasestorage.googleapis.com/v0/b/hogehoge-3d7a7.appspot.com/o/IMG_13342.jpg?alt=media&token=9ec9e498-beaa-44a0-8c0a-0bd374c4f1ac',
            };
        },
    };
</script>

<style scoped lang="scss">

    @media screen and (max-width: 480px) {
        h1 {
            /*font-size:20px;*/
        }
        p {
            font-size: 16px;
        }
        ul {
            height: 45px;

        }
    }

    @media screen and (min-width: 481px) {
        h1 {
            /*font-size:20px;*/
        }
        p {
            font-size: 17px;
        }
        ul {
            height: 45px;
        }
    }

    @media screen and (min-width: 897px) {
        h1 {
            /*font-size:28px;*/
        }
        p {
            font-size: 22px;
        }
        ul {
            height: 50px;
        }
    }

    /*.grid {*/
        /*display: grid;*/
        /*grid-template: "header" 330px "nav" 50px "section" 1fr "footer" 100px*/
                   /*/ 1fr;*/

        .Info {

            /*position: relative;*/
            $blurPx: 15px;

            .imgFilter {
                height: 150px;
                width: 100%;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                filter: blur($blurPx); /*ぼかし度*/

                .img_down {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.9;

                }

                .img_up {
                    position: absolute;
                    top: 0;
                    left: 0;
                    margin: 0 20%;
                    width: 60%;
                    height: 100%;
                    object-fit: cover;
                    filter: blur($blurPx); /*ぼかし度*/
                }

            }

            .faceImg {
                position: relative;
                display: block;
                margin: 75px auto 0;
                width: 180px;
                border: 15px solid #fff;
                border-radius: 120px;
            }
        }

        .name {
            font-size: 24px;
            text-align: center;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .job {
            text-align: center;
            margin-bottom: 15px;

            color: #999;
            font-size: 18px;
        }

        nav {
            position: sticky;
            top: 0;
            background: #fff;
            z-index: 1;

            ul {
                padding: 0;
                width: 45%;
                min-width: 350px;
                text-align: center;
                margin: 0 auto;


                li {
                    list-style: none;
                    float: left;
                    width: calc(100% / 3);
                    height: 100%;

                    .active {
                        border-bottom: solid 3px #ffd891;
                        color: #000;
                        font-weight: bold;

                        .en {
                            opacity: 0;
                        }

                        .ja {
                            opacity: 1;
                        }

                    }

                    a {
                        vertical-align: text-top;
                        display: inline-block;
                        text-align: center;
                        text-decoration: none;
                        color: rgba(0, 0, 0, 0.6);
                        height: 100%;
                        width: 100%;
                        /*font-size: 25px;*/
                        /*padding-left: 20px;*/
                        line-height: 47px;
                        box-sizing: border-box;


                        .en, .ja {
                            margin: 0 auto;
                            position: absolute; // .enと.jaを重ねて表示
                            transition: .5s; // 0.5秒で値をなめらかに変化させる
                            width: calc(45% / 3);
                            min-width: calc(350px / 3);
                        }

                        .en {
                            padding-bottom: 4.5px;
                            opacity: 1; // 普段は英語表記を表示
                        }

                        .ja {
                            opacity: 0; // 普段は日本語表記を透明に
                        }

                        &:hover .en {
                            opacity: 0; // aにホバーしたとき英語表記は透明に
                        }

                        &:hover .ja {
                            opacity: 1; //aにホバーしたとき日本語表記を表示
                        }
                    }
                }
            }
        }
    article, section {
        max-width: 800px;
        margin: 0 auto;
        padding: 30px 20px;

        h2 {
            color: #f00;
        }
    }
    /*}*/
</style>
