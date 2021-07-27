module.exports = (req,res, next) => {
    let usuario = req.session.usuario;
    if(usuario){
        res.locals.usuario = usuario;
    }else{
        res.locals.usuario = null;
    }
    next();
}