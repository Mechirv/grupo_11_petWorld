const userModel = require('../models/user');
module.exports = (req,res, next) => {
    
    let usuario = null;
   
    if(req.cookies && req.cookies.user){
        usuario = userModel.buscarPorEmail(req.cookies.user);
    }else if(req.session && req.session.usuario){
        usuario = req.session.usuario
    }
    res.locals.usuario = usuario; 
     next();
   
}

