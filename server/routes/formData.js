// formData.js
const express = require("express");
const router = express.Router();
const FormDataController = require("../controllers/formData");




// Route pour envoyer un e-mail
router.post("/send-email", FormDataController.sendFormData);

module.exports = router;
