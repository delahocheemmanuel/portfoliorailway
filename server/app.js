// app.js
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
require('dotenv').config();
const app = express();

// Middleware pour le traitement des données JSON
app.use(express.json());

// Middleware pour gérer les erreurs de CORS
app.use(cors());

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));



module.exports = app;

