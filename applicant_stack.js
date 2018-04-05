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
    if (req.body && req.body["Object Type"] === "hire") {
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
                /*
                example response
                                {
                "Method Result":"Success",
                "Hire Serial":"e2r6kxc4lk2x",
                "Candidate Serial":"a4r6kxcam3h1",
                "First Name":"George M.",
                "Last Name":"Blake",
                "Email":"george.blake@applicantstack.com",
                "Address 1":"4751 Fergusen Dr. (Sample)",
                "Address 2":"",
                "City":"Raleigh",
                "State":"NC",
                "Zip":"27616",
                "Phone":"919-871-7487",
                "Start Date":"",
                "Job Name":"Accounting Manager (Sample)",
                "Department":"Finance",
                "Job Category":"1B Middle Management",
                "Job Type":"Exempt (salaried)",
                "Pay Rate":"",
                "Location":"Atlanta, GA",
                "Stage":"New",
                "Manager":"Errolan Zambrano Carranza",
                "Create Date":"04\/05\/2018 01:41 PM",
                "Last Modified Date":"04\/05\/2018 01:41 PM",
                "Questionnaires":[
                ],
                "Forms":[
                    
                ]
                }
                */
            });
        })
    }
    res.sendStatus(200);
}




module.exports = receiveNotification;








