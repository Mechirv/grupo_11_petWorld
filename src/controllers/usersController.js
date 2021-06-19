const path = require('path');


const usersControlador = {
    login: (req,res)=>res.render('users/login'),
    register: (req,res) => res.render('users/register'),
 

}


module.exports = usersControlador;