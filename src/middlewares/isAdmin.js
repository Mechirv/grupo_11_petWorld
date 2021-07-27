
function isAdmin(req,res,next){
    req.body.admin = req.body.user.indexOf("@petworld") !=-1 ? true: false;
    next();
    }


module.exports = isAdmin;