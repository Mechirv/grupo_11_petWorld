const { validationResult } = require('express-validator');
const path = require('path');
const user = require('../models/user');


const usersController = {
    login: (req,res)=>res.render("users/login-register"),
    
    procesarLogin: (req,res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.render("users/login-register", {errors: errors.mapped(), old: req.body});
        }else{
            let resultado = user.buscarPorEmail(req.body.email)
            return resultado == true?  res.redirect("/users/perfil") : res.send("Error al cargar la informacion");
        }
    },


    register: (req,res) => res.render("users/register"),
     
    guardar: (req,res) => {
        const errors = validationResult(req);
        
        if(!errors.isEmpty()){
            return res.render("users/register", {errors: errors.mapped(), old: req.body});
        }else{
            
        let resultado = user.nuevo(req.body); 
        return resultado == true?  res.redirect("/users/login") : res.send("Error al cargar la informacion");
       
        }
    },
}


module.exports = usersController;