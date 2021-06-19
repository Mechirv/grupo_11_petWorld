
const express = require('express');
const routes = express.Router();
const indexControlador = require('../controllers/indexController');


routes.get('',indexControlador.home);



module.exports = routes;