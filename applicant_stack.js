const TOKEN = "2uyau0e0y8i97f832e0m74d6lv003ovgkrv0imvx";
const URL = "https://";
const KEYSECRET = "fhqiieqy1dq8h0fe";
const https = require("https");
function receiveNotification(req, res) {
    console.log("---------------------------------------")
    console.log(req.headers);
    console.log(req.body);

    var idCandidate = "a4r6kxcdwmrc";
    let URLCandidate = `/api/candidate/${req.body["Candidate Serial"]}`;
    let URLCandidates = `/api/candidates`;

    let options = {
        host: "tinphongsu.applicantstack.com",
        path: URLCandidate,
        headers: {
            "Token": TOKEN
        }
    }
    console.log("getting " + URLCandidates)
    https.get(options, (res) => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
            body += data;
        });
        res.on("end", (a) => {
            console.log(body);
        });
    })
    res.sendStatus(200);
}




module.exports = receiveNotification;








