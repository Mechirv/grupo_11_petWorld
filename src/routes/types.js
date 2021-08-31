const express = require('express');
const path = require('path');
const router = express.Router();
const typesController = require('../controllers/typesController');
const validaTipo = require('../middlewares/validaTipo');


//listado de tipo
router.get("/", typesController.listar);


//creación de un tipo
router.get("/create", typesController.crear);
router.post("/save",validaTipo, typesController.accionCrear);

//edicion de un tipo
router.get("/edit/:id",typesController.editar);
router.put("/update/:id",validaTipo, typesController.modificar);

//eliminación de un tipo
router.delete("/delete/:id", typesController.eliminar);



module.exports=router