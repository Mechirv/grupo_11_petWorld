const express = require('express');
const router = express.Router();
const path = require('path');
const productosController = require('../../controllers/api/productosController');

router.get("/products",productosController.list);

router.get("/products/:id",productosController.one);

module.exports = router;