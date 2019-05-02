<template>
    <nav>
        <ul>
            <li>
                <router-link to="/Portfolio" exact-active-class="active">
                    <p class="ja">📙 ポートフォリオ</p>
                    <p class="en">📙 Portfolio</p>
                </router-link>
            </li>
            <li>
                <router-link to="/" exact-active-class="active">
                    <p class="ja">👨🏻‍💻 プロフィール</p>
                    <p class="en">👨🏻‍💻 ‍‍‍Profile</p>
                </router-link>
            </li>
            <li>
                <router-link to="/Contact" exact-active-class="active">
                    <p class="ja">📨 お問い合わせ</p>
                    <p class="en">📨 Contact</p>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    export default {
        name: "NavigationMenu"
    };
</script>

<style scoped lang="scss">

    @media screen and (max-width: 480px) {
        p {
            font-size: 16px;
        }
        .ja{
            font-size: 12px;
        }
        ul {
            height: 45px;

        }
    }

    @media screen and (min-width: 481px) {
        p {
            font-size: 18px;
        }
        ul {
            height: 45px;
        }
    }

    @media screen and (min-width: 897px) {
        p {
            font-size: 20px;
        }
        .ja{
            font-size: 18px;
        }
        ul {
            height: 50px;
        }
    }


    nav {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        background-color: #fff;
        z-index: 2;

        ul {
            padding: 0;
            width: 90%;
            min-width: 350px;
            max-width: 850px;
            text-align: center;
            margin: 0 auto;

            li {
                list-style: none;
                float: left;
                width: calc(100% / 3);
                height: 100%;
                a {
                    vertical-align: text-top;
                    display: inline-block;
                    text-align: center;
                    text-decoration: none;
                    color: rgba(0, 0, 0, 0.6);
                    height: 100%;
                    width: 100%;
                    line-height: 47px;
                    box-sizing: border-box;


                    .en, .ja {
                        position: absolute; // .enと.jaを重ねて表示
                        transition: .5s; // 0.5秒で値をなめらかに変化させる
                        width: calc(90% / 3);
                        min-width: calc(350px / 3);
                        max-width: calc(850px / 3);
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


            }
        }
    }
</style>
