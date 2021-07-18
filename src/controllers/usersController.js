const path = require('path');
const user = require('../models/user');
const { validationResult } = require('express-validator');

const usersController = {
    login: (req,res)=>res.render("users/login-register"),
    logueado: (req,res) =>{},


    register: (req,res) => res.render("users/register"),
     
    guardar: (req,res) => {
        let errors = validationResult(req);
        console.log(errors);
        //res.send(errors);
        //if(!errors.isEmpty()){
        //    return res.render("users/register", {errores: errors.mapped(), old: req.body})
        //}else{
        //    user.nuevo(req.body); 
        //    return res.redirect("users/login-register");
        //    
        //}
    }
}


module.exports = usersController;