const nodemailer = require("nodemailer");
require('dotenv').config();
const FormData = require('../models/formData');

exports.sendFormData = async (req, res) => {
    try {
        console.log('Starting sendFormData function');
        
        const { name, email, message } = req.body;
        console.log('Received data:', name, email, message);
        
        const Mail = process.env.SMTP_USERNAME;
        const Password = process.env.SMTP_PASSWORD;
        
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: Mail,
                pass: Password
            }
        });
        
        const formData = new FormData({ name, email, message }); // Corrected line
        
        const mailOptions = {
            replyTo: formData.email, // Using formData here
            to: Mail,
            subject: 'Contact portfolio',
            text: `Nom: ${formData.name}\nE-mail: ${formData.email}\nMessage: ${formData.message}`
        };
        
        const info = await transporter.sendMail(mailOptions);
        console.log('E-mail sent:', info.response);
        
        res.status(201).json({ message: 'E-mail envoyé!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'E-mail non envoyé' });
    }   
};
