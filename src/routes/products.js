const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get("/productCart",productosController.cart);

router.get("/detail",productosController.detalle);

router.get("/detail/:id",productosController.detalle);

router.get("/create",productosController.crear)

router.get("/modify",productosController.modify)

module.exports=router
