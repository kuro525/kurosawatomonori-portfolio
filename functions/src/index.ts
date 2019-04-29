import * as functions from 'firebase-functions';
import * as request from 'request';


export const slack = functions.firestore.document('ContactMessage/{messageId}').onCreate(snapshot => {

    const data: any = snapshot.data();

    // 表示内容
    const message = `
御社名: ${data.company}
名前: ${data.name}
Email: ${data.email}

内容:
${data.multiText}`;



    const options = {
        url: functions.config().slack.webhookurl,
        headers: {'Content-type': 'application/json'},
        body: {'text': message,},
        json: true
    };

    request.post(options, (error, res) => {
        if (!error && res.statusCode === 200) {
            console.log('ok');
        } else {
            console.log('error: ' + res.statusCode);
        }
    });
    return 0;

});
