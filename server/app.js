// app.js
const express = require("express");


const cors = require("cors");
require('dotenv').config();
const app = express();

// Middleware pour le traitement des données JSON
app.use(express.json());

// Middleware pour gérer les erreurs de CORS
app.use(cors());





module.exports = app;

