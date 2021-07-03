const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
const multer = require('multer');

//disco de almacenamiento de imagenes
const almacenamiento = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './public/img/products')
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({almacenamiento : almacenamiento});


//listado de productos
router.get("/", productosController.listar);
router.get("/:category", productosController.listarCategoria);

//carrito
router.get("/productCart",productosController.cart);

//detalle de un producto en particular
router.get("/:id",productosController.detalle);

//creación de un producto
router.get("/create/", productosController.crear);
router.post("/",upload.single('image'), productosController.accionCrear);

//edicion de un producto

router.get("/:id/edit",productosController.editar);
router.put("/:id",upload.single('image'), productosController.modificar);

//eliminación de un producto
router.delete("/:id", productosController.eliminar);



module.exports=router
