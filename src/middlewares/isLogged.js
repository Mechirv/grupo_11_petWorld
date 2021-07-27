module.exports = (req, res, next) => {
    if (res.locals.usuario) {
      return next();
    } else{
      return res.redirect("/")
    }
  }