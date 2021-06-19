const path = require('path');
const express = require('express');
const app = express();
const methodOverride = require('method-override');


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
app.use("/login", rutasUser);
app.use("/register", rutasUser);

//app.get("/", (req,res)=>res.sendFile(path.resolve(__dirname,"./src/views","index.ejs")));
//app.get("/productCart", (req,res)=> res.sendFile(path.resolve(__dirname,"./src/views/products","productCart.ejs")));
//app.get("/productDetails", (req,res)=> res.sendFile(path.resolve(__dirname,"./src/views/products","productDetails.ejs")));

module.exports = app;