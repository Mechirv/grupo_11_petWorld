
const { body } = require('express-validator');
const user = require('../models/user');

const validaciones = [
    
    body("usuario").notEmpty().withMessage("Ingrese un nombre de usuario").bail()
        .isLength({min:6}).withMessage("Mínimo 6 caracteres"),
    body("email").notEmpty().withMessage("Debes ingresar un correo electrònico").bail()
        .isEmail().withMessage("Formato de correo electrònico invàlido").bail()
        .custom(value => {
            let existe = user.buscarPorEmail(value);
            if(existe){
                return Promise.reject('E-mail already in use')
            }
        }),
    body("pass").notEmpty().withMessage("Ingrese una contraseña").bail()
        .isLength({min:8}).withMessage("La contraseña debe tener como mínimo 8 caracteres"),
    body("confirm").notEmpty(),
    body("nombre").notEmpty().withMessage("Ingrese su nombre"),
    body("apellido").notEmpty().withMessage("Ingrese su apellido"),

]

module.exports = validaciones;