const nodemailer = require("nodemailer");
require('dotenv').config();
const FormData = require('../models/formData');

exports.sendFormData = async (req, res) => { // Fonction pour envoyer un e-mail
    try {
        const { name, email, message } = req.body; // Récupère les données du corps de la requête
        const formData = new FormData({ name, email, message }); // Crée une instance du modèle de données
        await formData.save(); // Enregistre les données dans la base de données
        
        const transporter = nodemailer.createTransport({ // Crée un transporteur Nodemailer pour l'envoi d'e-mails
            service: 'Gmail', // Utilise le service Gmail
            auth: {
                user: SMTP_USERNAME, // Utilisateur pour l'authentification
                pass: SMTP_PASSWORD // Mot de passe pour l'authentification
            },
            tls: {
                rejectUnauthorized: false // N'autorise pas la vérification du certificat SSL
            }
        });
        
        const mailOptions = {
            replyTo: formData.email, // Définit l'adresse de réponse sur l'e-mail de l'expéditeur
            to: RECIPIENT_EMAIL, // Définit l'adresse du destinataire de l'e-mail
            subject: 'Contact portfolio', // Définit le sujet de l'e-mail
            text: `Nom : ${name}\nE-mail : ${email}\nMessage : ${message}` // Corps de l'e-mail
        };

        const info = await transporter.sendMail(mailOptions); // Envoie l'e-mail
        console.log('E-mail envoyé :', info.response); // Affiche la réponse d'envoi dans la console
        
        res.status(201).json({ message: 'E-mail envoyé avec succès !' }); // Répond avec un message de succès
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error); // Affiche l'erreur dans la console
        res.status(500).json({ error: 'E-mail non envoyé' }); // Répond avec une erreur
    }   
};
