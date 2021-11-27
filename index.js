require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express()
const PORT = process.env.PORT || 5000;
const path = require('path')
// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/home',(req, res)=>{
    res.render( 'index', {
        nombre: 'Carlos ',
        titulo: "Curso node"
    });
});
app.get('/generic',(req, res)=>{
    res.render( 'generic', {
        nombre: 'Carlos ',
        titulo: "Curso node"
    });
})
app.get('/elements',(req, res)=>{
    res.render( 'elements', {
        nombre: 'Carlos ',
        titulo: "Curso node"
    });
})

app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(PORT, ()=> console.log('Server listening on port '+ PORT))