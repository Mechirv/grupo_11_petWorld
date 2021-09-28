const db = require('../../database/models/index');
const path = require('path');
const User = db.User;
const sequelize = db.sequelize;





//APIS
module.exports = {
 list: async (req,res)=>{
     try{
        let users = await User.findAll(
          {attributes: {
            exclude: ["apellido","pass","image","admin"]
        }});
        let nuevo = users.map(function(user){
            return{
                id: user.id,
                name: user.nombre,
                email: user.email,
                detail: "https://localhost:3030/api/users/" + user.id
            }
        })
        let respuesta = {
            cantidad : users.length,
            data: nuevo
        }
        return res.json(respuesta)
     }catch(err){
         console.log(err)
     }
    
  },
  one: async (req,res)=>{
      try{
        let user = await User.findByPk(req.params.id, {attributes: {exclude: ["pass","admin"]}});
        return res.json(user)
      }catch(err){
          console.log(err)
      }


  }
}