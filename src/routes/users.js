const express = require('express');
const routes = express.Router();
const usersControlador = require('../controllers/usersController');


routes.get('/login', usersControlador.login);

routes.get('/register', usersControlador.register);





module.exports = routes;