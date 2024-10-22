const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "https://shivanshgargportfolio.vercel.app",
    methods: "GET,POST,PUT,DELETE,OPTIONS", // Specify allowed methods
    allowedHeaders: "Content-Type", // Specify allowed headers
    credentials: true // If you need to send cookies or authentication tokens
}));
app.use(bodyParser.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (Gmail, Outlook, etc.)
    auth: {
        user: 'shivanshgarg587@gmail.com', // Replace with your email
        pass: 'vpey sfbh bstw cbaq'  // Your email password or app password
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'shivanshgarg587@gmail.com', // Replace with your email
        subject: 'New Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
