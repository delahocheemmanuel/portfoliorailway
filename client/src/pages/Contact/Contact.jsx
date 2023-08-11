import React, { useState } from "react";
import "./Contact.css"; // Assurez-vous de spécifier le bon chemin vers votre fichier CSS

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Envoi des données au backend (port 4000)
      const response = await fetch("https://portfolio-fps1.onrender.com/api/formData/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log(data); // Affiche la réponse du backend
  
      // Envoi d'un e-mail en utilisant une autre fonction du backend (port 4000)
      const emailResponse = await fetch("https://portfolio-fps1.onrender.com/api/formData/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const emailData = await emailResponse.json();
      console.log(emailData); // Affiche la réponse de l'envoi d'e-mail
  
      // Réinitialise le formulaire après l'envoi
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
    }
  };
  

  return (
    <main className="main__contact" >
    <form onSubmit={handleSubmit} className="form__contact">
      <div>
        <label>Nom:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
      </div>
      <button className="form__contact--btn" type="submit">Envoyer</button>
    </form>
    </main>
  );
};

export default Contact;
