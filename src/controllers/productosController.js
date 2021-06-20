let productosController = {
    listado: function() {},
    crear: (req,res) => {res.render("products/productCreate")},
    detalle:(req,res) => {res.render("products/productDetails")},
    cart:(req,res) => {res.render("products/productCart")},
    modify:(req,res) => {res.render("products/productModify")},
};

module.exports = productosController;
