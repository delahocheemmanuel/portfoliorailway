const nodemailer = require("nodemailer");
require('dotenv').config();
const FormData = require('../models/formData');

exports.sendFormData = async (req, res) => {
    try {
        console.log('Starting sendFormData function');
        
        const { name, email, message } = req.body;
        console.log('Received data:', name, email, message);
        
        const formData = new FormData({ name, email, message });
        await formData.save();
        console.log('FormData saved to database');
        
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD
            },
            secure: true, // Enforce a secure connection
            rejectUnauthorized: false // Allow self-signed certificates
        });
        
        const mailOptions = {
            replyTo: formData.email,
            to: process.env.SMTP_USERNAME,
            subject: `Contact portfolio`,
            text: `Nom: ${formData.name}\nE-mail: ${formData.email}\nMessage: ${formData.message}`
        };
        
        const info = await transporter.sendMail(mailOptions);
        console.log('E-mail sent:', info.response);
        
        res.status(201).json({ message: 'E-mail envoyé!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de l\'envoi de l\'e-mail' });
    }
};
