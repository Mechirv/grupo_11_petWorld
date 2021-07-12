const express = require('express');
const routes = express.Router();
const usersController = require('../controllers/usersController');
const path = require('path');
const multer = require('multer');

//disco de almacenamiento de imagenes
const almacenamiento = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, path.resolve(__dirname,"../../public/img","users"))
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({storage: almacenamiento});


routes.get("/login", usersController.login);


routes.get("/register", usersController.register);
routes.post("/save", [upload.single('image')], usersController.guardar);





module.exports = routes;