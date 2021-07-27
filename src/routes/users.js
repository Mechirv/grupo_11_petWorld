const express = require('express');
const routes = express.Router();
const path = require('path');
const multer = require('multer');
const usersController = require('../controllers/usersController');
const validaLogin = require('../middlewares/validaLogin');
const validaRegister = require('../middlewares/validaRegister');
const isAdmin = require('../middlewares/isAdmin');
const isLogged = require('../middlewares/isLogged');

//disco de almacenamiento de imagenes
const almacenamiento = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, path.resolve(__dirname,"../../public/img","users"))
    },
    filename: function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({storage: almacenamiento});


routes.get("/login", usersController.login);

routes.post("/login", [validaLogin], [isAdmin],usersController.procesarLogin);

routes.get("/logout",[isLogged],usersController.logout);

routes.get("/register", usersController.register);

routes.post("/save", [upload.single('image')],validaRegister, usersController.guardar);

routes.get("/perfil",isLogged,usersController.perfil);






module.exports = routes;