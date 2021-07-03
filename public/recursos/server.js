const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
//Aqui seteamos las vistas
app.use(express.static(__dirname + '../public/'));
//Primero tenia la opcion de arriba, depsues puse esta de abajo
app.set('views', path.join(__dirname, './'));



app.use(bodyParser.urlencoded({extended:false}));

module.exports=app; 