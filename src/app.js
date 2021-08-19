const path = require('path');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const multer = require('multer');
const session = require('express-session');
const cookies = require('cookie-parser')


//acceso pub
app.use(express.static(path.resolve(__dirname,'../public'))); //DEJO ACCESIBLE LA CARPETA PUBLIC



//Servidor
app.set("port", process.env.PORT || 3030)
app.listen(app.get("port"), () => console.log("sever start in http://localhost:" + app.get("port")));


//template engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));


//config. de datos
app.use(express.urlencoded({extended:false})); // add req.body
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookies()); // add req.cookies and res.cookie()
app.use(session({secret: "Mensaje", resave: false, saveUninitialized: false}));  //add req.session

app.use(require('./middlewares/usuarioSession'));

//Rutas
const rutasIndex = require('./routes/index');
app.use(rutasIndex);

const rutasUser = require('./routes/users');
app.use("/users", rutasUser);


const rutasProducts = require("./routes/products");
app.use("/products",rutasProducts);

const rutasCategories = require("./routes/categories");
app.use("/categories",rutasCategories);

const rutasTypes = require("./routes/types");
app.use("/types",rutasTypes);


module.exports = app;