// formData.js
const express = require("express");
const router = express.Router();
const FormDataController = require("../controllers/formData");
const limiter = require("../middleware/rate-limit"); // Middleware pour limiter le nombre de requêtes par IP



// Route pour envoyer un e-mail
router.post("/send-email", limiter, FormDataController.sendFormData);

module.exports = router;
