
function isAdmin(req,res,next){
    req.body.admin = req.body.email.indexOf("@petworld") !=-1 ? true: false;
    next();
    }


module.exports = isAdmin;