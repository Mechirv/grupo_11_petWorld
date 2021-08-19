const path = require('path');
const product = require('../models/products');
const db = require('../database/models/index');
const Product = db.Product;
const sequelize = db.sequelize;

const indexControlador = {
    //home: (req,res)=>{
    //let products = product.destacados();
    //res.render("index", {products:products})
    //},
    home: async (req,res) => {
        try{
            let products = await Product.findAll(
                {
                    where: {destacado: true}
                }
            )
            
            res.render("index",{products:products})
        }
        catch(err){}
    }
}


module.exports = indexControlador;