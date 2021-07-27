const { validationResult } = require('express-validator');
const path = require('path');
const userModel = require('../models/user');



const usersController = {
    login: (req,res)=>res.render("users/login-register"),
    
    procesarLogin: (req,res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.render("users/login-register", {errors: errors.mapped(), old: req.body});
        }else{
            let usuario = userModel.buscarPorEmail(req.body.user);
            if(req.body.recordarme){
                res.cookie("user",req.body.user,{maxAge:300000});
            }
        
            req.session.usuario = usuario;
            
            return  res.redirect("/");
        }
    },

    logout: (req,res) => {
        
        delete req.session.usuario;
        return res.redirect("/");
      },


    register: (req,res) => res.render("users/register"),
     
    guardar: (req,res) => {
        const errors = validationResult(req);
        
        if(!errors.isEmpty()){
            return res.render("users/register", {errors: errors.mapped(), old: req.body});
        }else{
            const resultado = userModel.nuevo(req.body,req.file); 
             return resultado == true?  res.redirect("/users/login") : res.send("Error al cargar la informacion");
       
        }
    },

    perfil: (req,res)=>res.render("users/perfil"),
}


module.exports = usersController;