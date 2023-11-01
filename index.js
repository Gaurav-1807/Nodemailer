
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
    let { email, sub, text } = req.body;
    const mailoptions = {
        from: "gauravambaliya77@gmail.com",
        to: email,
        subject: sub,
        text: text,
    }
    transporter.sendMail(mailoptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
           
            console.log(info)
        }
        res.send("done")
    });
    
})



app.listen(8080, () => {
    console.log("listening on port 8090");
});

