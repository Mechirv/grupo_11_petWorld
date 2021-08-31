const { body } = require('express-validator');
const modeloProducto = require('../models/products');

const validaciones = [
    body("name").notEmpty().withMessage("Ingrese el nombre del producto")
    .isLength({min:5}).withMessage("El nombre debe tener al menos 5 caracteres").bail(),
    body("description").notEmpty().withMessage("Ingrese la descripción del producto")
    .isLength({min:20}).withMessage("La descripción debe tener al menos 20 caracteres"),
    body("price").notEmpty().withMessage("Debe ingresar el precio del producto"),
]

module.exports = validaciones;