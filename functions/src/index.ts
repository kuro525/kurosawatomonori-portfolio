import * as functions from 'firebase-functions';
import * as request from 'request-promise';
import * as admin from 'firebase-admin';
import axios from 'axios';
//
admin.initializeApp();
const timestamp = admin.firestore.FieldValue.serverTimestamp();


exports.slack = functions.region('asia-northeast1').firestore.document('ContactMessage/{messageId}').onCreate(snapshot => {

    const data: any = snapshot.data();

    // 表示内容
    const message = `
御社名: ${data.company}
名前: ${data.name}
📧 Email: ${data.email}

📄 メッセージ内容 📄
${data.multiText}`;


    const options = {
        url: functions.config().slack.webhookurl,
        headers: {'Content-type': 'application/json'},
        body: {'text': message},
        json: true
    };

    request.post(options, (error, res) => {
        if (!error && res.statusCode === 200) {
            console.log('Slackメッセージ: 送信済み');
        } else {
            throw new Error(`Slack送信エラー__${res.statusCode}`);
        }
    });

    return 0;

});


exports.firestoreAdd = functions.region('asia-northeast1').https.onCall(async (data, context) => {

    const firestore = () => {
         admin.firestore().collection('ContactMessage').add({
            company: data.company,
            name: data.name,
            email: data.email,
            multiText: data.multiText,
            time: timestamp,
        })
             .then(() => {
                console.log('Firestore: 追加完了');
                return 'ok';

            })
            .catch((e) => {
                console.log(e);
                return new Error(`Firestore: エラー`);
            });
    };

    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${functions.config().recaptcha.key}&response=${data.token}`;
    const recaptcha = await axios.post(url);
    try {
        console.log(recaptcha.data);
        if (recaptcha.data.score > 0.3) {
            await firestore();
            return 'ok';

        } else {
            console.error('reCAPTCHA_v3_スコアNG');
            return new Error(`reCAPTCHA_v3_スコアNG`);
        }
    } catch (e) {
        console.error(`エラー__${e}`);
        return new Error(`エラー__${e}`,);
    }

});
