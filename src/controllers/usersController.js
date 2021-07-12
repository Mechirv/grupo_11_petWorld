const path = require('path');
const user = require('../models/user');

const usersController = {
    login: (req,res)=>res.render("users/login-register"),
    logueado: (req,res) =>{},


    register: (req,res) => res.render("users/register"),
    
    guardar: (req,res) => {
        console.log(req.body);
        let resultado = user.nuevo(req.body,req.file); 
    return resultado == true? res.redirect("users/login") : res.send("Error al cargar la informacion");
    }
}


module.exports = usersController;