import Vue from 'vue';
import Vuex from 'vuex';

import {db} from '@/main';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        contents: null,
    },
    mutations: {
        setContents(state, payload) {
            state.contents = payload;
        },
    },
    actions: {
        setContents({commit}) {
            const contents: any[] = [];
            db.collection('fl_content').get()
                .then((response: any) => {
                    response.forEach((data: any) => {

                        const path = data.data().img[0].path;

                        const content = {
                            img: null,
                            imgPath: path,
                            title: data.data().title,
                            content: data.data().content,
                            tags: data.data().tag,
                            date: data.data().date,
                            public: data.data().public,
                            url: data.data().url,
                        };

                        contents.push(content);

                    });
                })
                .then(() => {
                    contents.forEach((content) => {
                        db.doc(content.imgPath).get()
                            .then((response: any) => {
                                content.img = response.data().file;
                            });

                    });

                })
                .then(() => {
                    commit('setContents', contents);
                    // console.log(contents);

                });

        },
    },
});
