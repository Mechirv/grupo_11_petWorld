
const { body } = require('express-validator');
const db = require('../database/models/index');
const Type = db.Type;
const sequelize = db.sequelize;


const validaciones = [
    body("name").notEmpty().withMessage('Debe ingresar un nombre')
    .isLength({min:3}).withMessage('El nombre debe tener mas de 3 caracteres')

]

module.exports = validaciones;