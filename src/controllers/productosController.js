let productosController = {
    listar: (req,res) => {res.render("products/productList")},
    detalle:(req,res) => {res.render("products/productDetails")},
    crear: (req,res) => {res.render("products/productCreate")},
    accionCrear: (req,res) => {},
    cart:(req,res) => {res.render("products/productCart")},
    editar: (req,res) => {res.render("products/productModify")},
    modificar:(req,res) => {res.render("products/productModify")},
    eliminar: (req,res) => {},
};

module.exports = productosController;
