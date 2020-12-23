const express = require('express');

const mainController = require('../controllers/mainController');
const router = express.Router();

//Login POST
router.get('/login',mainController.getLogin);

module.exports = router;