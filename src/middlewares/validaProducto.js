const { check } = require('express-validator');
const modeloProducto = require('../models/products');

const validaciones = [
    check("name").notEmpty().withMessage("Ingrese el nombre del producto"),
    check("description").notEmpty().withMessage("Ingrese la descripción del producto"),
    check("price").notEmpty,
    check("type").notEmpty(),
    check("category").notEmpty()
   

]

module.exports = validaciones;