const path = require('path');
const express = require('express');
const app = express();
const methodOverride = require('method-override');


app.use(methodOverride('_method'));
app.use(express.static(path.resolve(__dirname,'./public'))); //DEJO ACCESIBLE LA CARPETA PUBLIC
app.listen(3030, () => console.log("sever start in http://localhost:3030"));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));


app.get("/", (req,res)=>res.sendFile(path.resolve(__dirname,"./src/views","index.ejs")));
app.get("/login", (req,res)=>res.sendFile(path.resolve(__dirname,"./views/users","login.ejs")));
app.get("/register", (req,res)=> res.sendFile(path.resolve(__dirname,"./src/views/users","register.ejs")));
app.get("/productCart", (req,res)=> res.sendFile(path.resolve(__dirname,"./src/views/products","productCart.ejs")));
app.get("/productDetails", (req,res)=> res.sendFile(path.resolve(__dirname,"./src/views/products","productDetails.ejs")));