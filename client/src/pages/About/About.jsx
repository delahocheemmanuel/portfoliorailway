import React from 'react';
import Footer from '../../components/Footer/Footer';
import './About.css';


const About = () => {
  return (
    <main className="cv__container">
      <div className="cv__header">
        <h1>Delahoche Emmanuel</h1>
        <p>Email : delahochemanu@hotmail.fr</p>
        <p>Téléphone : 06 78 91 45 79</p>
        <p>112 rue saint-martin 60600 Etouy</p>
        <>Permis B</>
      </div>

      <div className="cv__section">
        <h2>Objectif professionnel</h2>
        <p>Un résumé court et percutant de votre objectif professionnel</p>
      </div>

      <div className="cv__section">
        <h2>Expérience professionnelle</h2>
        <ul>
          <li>
            <p>Poste, Entreprise</p>
            <p>Date de début - Date de fin</p>
            <p>Description des responsabilités et réalisations</p>
          </li>
          <li>
            <p>Poste, Entreprise</p>
            <p>Date de début - Date de fin</p>
            <p>Description des responsabilités et réalisations</p>
          </li>
          {/* Ajoutez d'autres expériences professionnelles ici */}
        </ul>
      </div>

      <div className="cv__section">
        <h2>Formation</h2>
        <ul>
          <li>
            <p>Développeur Web, OpenClassrooms</p>
            <p>08/2023</p>
            <p>HTML,CSS,SCSS,SASS,Javascript,API,Developpeur Agile,SEO,React,MongoDB</p>
          </li>
          <li>
            <p>Diplôme, Institution</p>
            <p>Date d'obtention</p>
            <p>Description des études et des réalisations académiques</p>
          </li>
          {/* Ajoutez d'autres formations académiques ici */}
        </ul>
      </div>

      <div className="cv__section">
        <h2>Compétences</h2>
        <ul>
          <li>Compétence 1</li>
          <li>Compétence 2</li>
          <li>Compétence 3</li>
          {/* Ajoutez d'autres compétences ici */}
        </ul>
      </div>

      <div className="cv__section">
        <h2>Langues</h2>
        <ul>
          <li>Anglais - base "a déja compris un écossais et un irlandais dans un bar"</li>
          <li>Allemand - notion LV1 .Ja, ich spreche ein beßiun Deutsch,karl otto ist schumzigt</li>
        </ul>
      </div>

      <div className="cv__section">
        <h2>Centres d'intérêt</h2>
        <ul>
          <li>Bricolage</li>
          <li>jardinnage</li>
          <li>Montages vidéos</li>
          {/* Ajoutez d'autres centres d'intérêt ici */}
        </ul>
      </div>
      <Footer />
      {/* Ajoutez d'autres sections pertinentes à votre CV */}
    </main>
  );
}


export default About;