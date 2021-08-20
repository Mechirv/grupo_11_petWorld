const express = require('express');
const path = require('path');
const router = express.Router();
const productosController = require('../controllers/productosController');
const multer = require('multer');
const validarProducto = require('../middlewares/validaProducto');


//disco de almacenamiento de imagenes
const almacenamiento = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, path.resolve(__dirname,"../../public/img","products"))
    },
    filename:function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({storage: almacenamiento});


//listado de productos
router.get("/", productosController.listar);
//router.get("/category/:category", productosController.listarCategoria);

//carrito
router.get("/productCart",productosController.cart);

//creación de un producto
router.get("/create", productosController.crear);
router.post("/save",[upload.single('image')], validarProducto, productosController.accionCrear);

//edicion de un producto

router.get("/edit/:id",productosController.editar);
router.put("/update/:id",[upload.single('image')], productosController.modificar);

//eliminación de un producto
router.delete("/delete/:id", productosController.eliminar);

//buscar un producto - search bar
router.get("/search",productosController.buscar)

//detalle de un producto en particular
router.get("/:id",productosController.detalle);


module.exports=router
