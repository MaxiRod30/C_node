const express = require('express');
const hbs = require('hbs');
require('dotenv').config();// para establecer variables de entorno PORT

const app = express();
const port = process.env.PORT;

//Handlebars
//Si se utiliza la configuracion por defecto de hbs, la carpeta a donde apunta es la views
app.set('view engina','hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public',{extensions:['html']}));
/*
app.use tiene prioridad respecto a esta llamada
http://localhost:8080/hola-mundo
app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo de su repectiva ruta')
});
*/
/*
app.get('/', (req, res) => {
  res.render('home.hbs',{
    nombre: 'Agustin el uno!',
    titulo: 'Claro PAPA! '
  });// apunta a la carpeta views nombre de archivo home para renderizar esa pagina
  //res.send('hola mundo'); para probar
});
*/
/*
app.get('/generic.html', (req, res) => {
  res.render('generic.hbs',{
    nombre: 'Maxi',
    titulo: 'curso node'
  });// apunta a la carpeta views nombre de archivo home para renderizar esa pagina

});
*/
/*
app.get('/elements.html', (req, res) => {
  res.render('elements.hbs',{
    nombre: 'Maxi',
    titulo: 'curso node'
  });// apunta a la carpeta views nombre de archivo home para renderizar esa pagina
});
*/
// * es comodin para cualquier ruta
//__dirname todo su path donde esta instalado la aplicacion
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})