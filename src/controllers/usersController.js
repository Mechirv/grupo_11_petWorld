const { validationResult } = require('express-validator');
const path = require('path');
const user = require('../models/user');


const usersController = {
    login: (req,res)=>res.render("users/login-register"),
    
    logueado: (req,res) =>{},


    register: (req,res) => res.render("users/register"),
     
    guardar: (req,res) => {
        let errors = validationResult(req);
        

        console.log(errors.mapped());
        
        console.log(req.body);
        
        if(!errors.isEmpty()){
            return res.render("users/register", {errores: errors.mapped(), old: req.body});
        }else{
            let resultado = user.nuevo(req.body); 
            return resultado == true?  res.redirect("/users/login") : res.send("Error al cargar la informacion");
       
        }
    },
}


module.exports = usersController;