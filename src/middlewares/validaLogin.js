const { body } = require('express-validator');
const userModel = require('../models/user');
const bcrypt = require('bcryptjs');

const validaciones = [
    body('user').isEmail().withMessage("Debes ingresar un correo electrónico").bail()
    .isEmail().withMessage("Formato de correo electrónico inválido").bail()
    .custom(value => {
        let existe = userModel.buscarPorEmail(value);
        if(!existe){
            return Promise.reject('Usuario no registrado')
        }
        return true;
    }),
    body('password').isLength({min: 8}).custom((value, {req}) => {
        const usuario = userModel.buscarPorEmail(req.body.user);
        if(bcrypt.compareSync(value,usuario.password)!=true){
            return Promise.reject('Contraseña incorrecta');
        }
        return true;
    })

]

module.exports = validaciones;