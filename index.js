
const express = require('express')
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gauravambaliya77@gmail.com',
        pass: 'fgdt nooq aowi izvi'
    }
});

app.post("/send", (req, res) => {
    let { email, subject, text } = req.body;
    const mailoptions = {
        from: "gauravambaliya77@gmail.com",
        to: "daksh1or2@gmail.com",
        subject: "Node.js",
        text: 'Hello',
    }
    transporter.sendMail(mailoptions, function (error, info) {
        if (error) {
            res.send(error);
        } else {
            res.send('Email sent: ' + info.response);
        }
    });
})



app.listen(8080, () => {
    console.log("listening on port 8090");
});

