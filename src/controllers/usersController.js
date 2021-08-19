const db = require('../database/models/index');
const { validationResult } = require('express-validator');
const path = require('path');
//const userModel = require('../models/user');
const User = db.User;
const sequelize = db.sequelize;


const usersController = {
    login: (req,res)=>res.render("users/login-register"),
    

    procesarLogin: async (req,res) => {
        const errors = validationResult(req);
        try{
                let usuario = await User.findOne({where : {email: req.body.email}});
                if(req.body.remember){
                    res.cookie("email",req.body.email,{maxAge:300000})
                  }
                req.session.usuario  = usuario;
                return res.redirect("/");
        
        }catch(errors){

        }
    },


    logout: (req,res) => {
        res.cookie("email",req.session.email,{maxAge:0})
        delete req.session.usuario;
        return res.redirect("/");
      },


    register: (req,res) => res.render("users/register"),
     

    guardar: async (req,res) => {
    const errors = validationResult(req)
       try{
           if(errors.isEmpty()){
            let newUser = await User.create(req.body);
            return res.redirect("users/login")
           }
           else{
            return res.render("users/register", {errors: errors.mapped(), old: req.body});
           }
       }
       catch(errors){
          res.redirect("users/register");
       }    
    },
            
   
    perfil: (req,res)=>res.render("users/perfil"),
}


module.exports = usersController;