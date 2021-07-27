const { body } = require('express-validator');
const modeloProducto = require('../models/products');

const validaciones = [
    body("name").notEmpty().withMessage("Ingrese el nombre del producto").bail(),
    body("description").notEmpty().withMessage("Ingrese la descripción del producto"),
    body("price").notEmpty().withMessage("Debe ingresar el precio del producto"),
]

module.exports = validaciones;