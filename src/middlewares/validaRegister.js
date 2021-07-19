const { body } = require('express-validator');
//const modeloUsuario = require('../models/user');

const validaciones = [
    body("email").isEmail().withMessage("Debe completar el campo email"),
    body("usuario").notEmpty().withMessage("Ingresar un usuario"),
    body("pass").notEmpty(),
    body("confirm").notEmpty(),
    body("nombre").notEmpty(),
    body("apellido").notEmpty(),

]

module.exports = validaciones;