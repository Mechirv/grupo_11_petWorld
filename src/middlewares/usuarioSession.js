//const userModel = require('../models/user');
const db = require('../database/models/index');
const User = db.User;
const sequelize = db.sequelize;


module.exports = (req,res, next) => {
    
    let usuario = null;
   
   if(req.cookies && req.cookies.user){
        usuario = User.findOne({where: {email: req.cookies.email}});
    }else if(req.session && req.session.usuario){
       usuario = req.session.usuario
    }
    res.locals.usuario = usuario; 
     next();

  
   
}

