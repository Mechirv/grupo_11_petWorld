const path = require('path');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const multer = require('multer');


app.use(methodOverride('_method'));
app.use(express.static(path.resolve(__dirname,'../public'))); //DEJO ACCESIBLE LA CARPETA PUBLIC


//puerto
app.set("port", process.env.PORT || 3030)
app.listen(app.get("port"), () => console.log("sever start in http://localhost:" + app.get("port")));


//template engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));



//Rutas
const rutasIndex = require('./routes/index');
app.use(rutasIndex);

const rutasUser = require('./routes/users');
app.use("/users", rutasUser);


const rutasProducts = require("./routes/products");
app.use("/products",rutasProducts);


module.exports = app;