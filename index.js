const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use(express.urlencoded({ extended:true }));
app.set('view engine', 'ejs');

app.use('/', routes)

app.listen('3000', function() {
    console.log('Funcionando')
})