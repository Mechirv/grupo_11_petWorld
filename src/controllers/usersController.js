const db = require('../database/models/index');
const { validationResult } = require('express-validator');
const path = require('path');
//const userModel = require('../models/user');
const User = db.User;
const sequelize = db.sequelize;


const usersController = {
    login: (req,res)=>res.render("users/login-register"),
    

    procesarLogin: async (req,res) => {
        const errores = validationResult(req);
        try{
            if(errores.isEmpty()){
                let usuario = await User.findOne({where : {email: req.body.email}});
                if(req.body.remember){
                    res.cookie("email",req.body.email,{maxAge:300000})
                  }
                req.session.usuario  = usuario;
                return res.redirect("/");
                }
                else{
                  res.render("users/login-register",{errors: errores.mapped(), old: req.body})
                }
                
        }catch(errors){
          res.send(errores)  

        }
    },


    logout: (req,res) => {
        res.cookie("email",req.session.email,{maxAge:0})
        delete req.session.usuario;
        return res.redirect("/");
      },


    register: (req,res) => res.render("users/register"),
     

    guardar: async (req,res) => {
    const errors = validationResult(req);
    
       try{
          if(!errors.isEmpty()){
             res.render("users/register",{errors: errors.mapped(), old: req.body})

          }else{
            let admin = req.body.email.indexOf("@petworld") !=-1 ? true: false;
            let newUser = await User.create({
              nombre: req.body.nombre,
              apeliido:req.body.apellido,
              email:req.body.email,
              pass:req.body.pass,
              image:req.file.filename,
              admin: admin
            }
          );
            return res.render("users/login-register")
          }
      }
     catch(errors){
        res.redirect("users/register");
        }    
    },
            
   
    perfil: (req,res)=>res.render("users/perfil"),

    modificar: async (req,res)=>{
      let update = await User.update({
        
        image: req.file.filename,
        pass: req.body.pass
      },
      {
        where: {id:req.params.id}
    });
    res.redirect("/products/");

    }
}


module.exports = usersController;