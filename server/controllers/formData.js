const nodemailer = require("nodemailer");

require('dotenv').config();
const FormData = require('../models/formData');

exports.saveFormData = async (req, res) => {
    try {
        console.log('Starting saveFormData function');
        
        const { name, email, message } = req.body;
        console.log('Received data:', name, email, message);
        
        const formData = new FormData({ name, email, message });
        await formData.save();
        console.log('FormData saved to database');
        
    
        
        res.status(201).json({ message: 'Form data saved successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

exports.sendFormData = async (req, res) => {
    try {
        console.log('Starting sendFormData function');
        
        const { name, email, message } = req.body;
        console.log('Received data:', name, email, message);
        
        const formData = new FormData({ name, email, message });
        await formData.save();
        console.log('FormData saved to database');
        
        const Mail = process.env.SMTP_USERNAME;
        const Password = process.env.SMTP_PASSWORD;
        
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: Mail,
                pass: Password
            }
        });
        
        const mailOptions = {
            replyTo: formData.email,
            to: Mail,
            subject: `Contact portfolio `,
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