const { body } = require('express-validator');
const modeloProducto = require('../models/products');

const validaciones = [
    body("name").notEmpty().withMessage("Ingrese el nombre del producto")
    .isLength({min:5}).withMessage("El nombre debe tener al menos 5 caracteres").bail(),
    body("description").notEmpty().withMessage("Ingrese la descripción del producto")
    .isLength({min:20}).withMessage("La descripción debe tener al menos 20 caracteres"),
    body("price").notEmpty().withMessage("Debe ingresar el precio del producto"),
    body("type_id").notEmpty().withMessage("Debe seleccionar un tipo"),
    body("category_id").notEmpty().withMessage("Debe seleccionar una categoría"),
    body("image").custom( (value, {req})=>{
        
        if(!(req.file.mimetype == "image/jpeg" || req.file.mimetype == "image/jpg" || req.file.mimetype == "image/png" || req.file.mimetype == "image/gif")){
            return Promise.reject('Formato inválido')
        }
        return true;
    })
]

module.exports = validaciones;