const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

//listado de productos
router.get("/", productosController.listar);

router.get("/productCart",productosController.cart);

//detalle de un producto en particular
router.get("/:id",productosController.detalle);

//creación de un producto
router.get("/create",productosController.crear);
router.post("", productosController.accionCrear);

//edicion de un producto

router.get("/:id/edit",productosController.editar);
router.put("/:id", productosController.modificar);

//eliminación de un producto
router.delete("/:id", productosController.eliminar);



module.exports=router
