const express = require('express');
const app = express();
const routes = require('./routes/routes');
const path = require('path');

app.use(express.urlencoded({ extended:true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')))

app.use('/', routes)

app.listen('3000', function() {
    console.log('Funcionando')
})