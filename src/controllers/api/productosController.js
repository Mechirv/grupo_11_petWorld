
const db = require('../../database/models/index');
const typesController = require('../typesController');
const Product = db.Product;
const sequelize = db.sequelize;
const Category = db.Category;
const Type = db.Type;
const Op = db.Sequelize.Op;

module.exports = {
    list: async (req,res)=>{
        let productos = await Product.findAll( {include: [{association: "types"},{association:"categories"}]});
        let nuevo = productos.map(function(prod){
            return{
                id: prod.id,
                name:prod.name,
                description: prod.description,
                detail: "https://localhost:3030/api/products/" + prod.id

            }
        })
        return res.json({
            cantidad: productos.length,
            data: nuevo
        }

        )

    },
    one: async (req,res)=>{
        let producto = await Product.findByPk(req.params.id, {include: [{association: "types"},{association:"categories"}]});
        return res.json({data: producto})

    }
}