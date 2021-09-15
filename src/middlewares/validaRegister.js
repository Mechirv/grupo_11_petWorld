
const { body } = require('express-validator');
//const user = require('../models/user');
const db = require('../database/models/index');
const User = db.User;
const sequelize = db.sequelize;


const validaciones = [
    
    body("email").notEmpty().withMessage("Debes ingresar un correo electrònico").bail()
        .isEmail().withMessage("Formato de correo electrònico inválido").bail()
        .custom(async (value) => {
            let existe = await User.findOne({where: {email: value}});
            if(existe != null){
                return Promise.reject('El email ya esxiste')
            }
            return true;
        }),
    body("pass").notEmpty().withMessage("Ingrese una contraseña").bail()
        .isLength({min:8}).withMessage("La contraseña debe tener como mínimo 8 caracteres"),
    body("confirm").notEmpty(),
    body("nombre").notEmpty().withMessage("Ingrese su nombre")
    .isLength({min:2}).withMessage("El nombre debe tener al menos 2 caracteres"),
    body("apellido").notEmpty().withMessage("Ingrese su apellido")
    .isLength({min:2}).withMessage("el apellido debe tener al menos 2 caracteres"),
    body("image").custom( (value, {req})=>{
        
        if(!(req.file.mimetype == "image/jpeg" || req.file.mimetype == "image/jpg" || req.file.mimetype == "image/png" || req.file.mimetype == "image/gif")){
            return Promise.reject('Formato inválido')
        }
        return true;
    })

]

module.exports = validaciones;