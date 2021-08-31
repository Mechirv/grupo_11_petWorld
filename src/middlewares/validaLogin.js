const { body } = require('express-validator');
//const userModel = require('../models/user');
const bcrypt = require('bcryptjs');

const db = require('../database/models/index');
const User = db.User;
const sequelize = db.sequelize;

const validaciones =  [
    body('email').isEmail().withMessage("Formato de correo electrónico inválido").bail()
    .custom( async(value) => {
        console.log(value)
        let usuario = await User.findOne({where: {email: value}});
        
        if(usuario == null){
            return Promise.reject('Usuario no registrado')
        }
        return true;
    }),
    body('password').isLength({min: 8}).withMessage("La contraseña debe tener como mínimo 8 caracteres").bail()
    //.custom(async (value, {req}) => {
    //    const usuario = await  User.findOne({where: {email: req.body.email}});
    //    //console.log(value)
    //    console.log(usuario);
    //    if(bcrypt.compareSync(value,usuario.pass)!=true){
    //        return Promise.reject('Contraseña incorrecta');
    //    }
    //    return true;
    //})

]

//const validaciones = [
//    body('email').isEmail().withMessage("Debes ingresar un correo electrónico").bail()
//    .isEmail().withMessage("Formato de correo electrónico inválido").bail()
//    .custom(value => {
//        let existe = User.findOne(value);
//        if(!existe){
//            return Promise.reject('Usuario no registrado')
//        }
//        return true;
//    }),
//    body('password').isLength({min: 8}).custom((value, {req}) => {
//        const usuario = User.findOne(req.body.email);
//        if(bcrypt.compareSync(value,usuario.password)!=true){
//            return Promise.reject('Contraseña incorrecta');
//        }
//        return true;
//    })
//
//]

module.exports = validaciones;