const TOKEN = "2uyau0e0y8i97f832e0m74d6lv003ovgkrv0imvx";
const URLAPI = "tinphongsu.applicantstack.com";
const KEYSECRET = "fhqiieqy1dq8h0fe";
const https = require("https");
function receiveNotification(req, res) {
    console.log("---------------------------------------")
    console.log(req.body);
    /*  
    
    format final request
    { 'Object Type': 'hire',
     'Event Type': 'stagechange',
     Domain: 'tinphongsu',
     Secret: 'fhqiieqy1dq8h0fe',
     'Event Date': '2018-04-05T13:03:46-04:00',
     Stage: 'New',
     'Hire Serial': 'e2r6kxcwf77v',
     'User Serial': '',
     'User Type': 'SYSTEM' } */
    if (req.body && req.body["Object Type"]==="hire") {
        console.log("---------------------------------------")
        console.log("Getting user")
        var idHire = req.body["Hire Serial"];
        let URLCandidate = `/o/api/hire/${idHire}`;
        //let URLCandidates = `/api/candidates`;
        let options = {
            host: URLAPI,
            path: URLCandidate,
            headers: {
                "Token": TOKEN
            }
        }
        console.log("getting " + idHire)
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
    }
    res.sendStatus(200);
}




module.exports = receiveNotification;








