const path = require('path');


const usersControlador = {
    login: (req,res)=>res.sendFile(path.join(__dirname,"../views/users","login")),
    register: (req,res) => res.sendFile(path.resolve(__dirname, '../views/users','register')),


}


module.exports = usersControlador;