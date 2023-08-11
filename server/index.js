//server/index.js
const path = require('path');
const express = require('express');
const formDataRouter = require('./routes/formData');
const PORT = process.env.PORT || 3001;
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(express.json()); // Middleware pour le traitement des données JSON

app.use('/api/formData', formDataRouter); // Définir la route pour le formulaire de contact

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
