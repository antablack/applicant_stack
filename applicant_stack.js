const TOKEN = "2uyau0e0y8i97f832e0m74d6lv003ovgkrv0imvx";
const URL = "https://tinphongsu.applicantstack.com";
const KEYSECRET = "fhqiieqy1dq8h0fe";

function receiveNotification(req, res) {
    console.log(req.headers);
    console.log(req.body);
    res.sendStatus(200);
}




module.exports = receiveNotification;








