const express = require('express');
const path = require('path');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');


//listado de categorias
router.get("/", categoriesController.listar);


//creación de una categoria
router.get("/create", categoriesController.crear);
router.post("/save", categoriesController.accionCrear);

//edicion de una categoria
router.get("/edit/:id",categoriesController.editar);
router.put("/update/:id", categoriesController.modificar);

//eliminación de una categoria
router.delete("/delete/:id", categoriesController.eliminar);



module.exports=router
