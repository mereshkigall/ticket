const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');


// connecting to db
mongoose.connect('mongodb://localhost/crud-mongo')
	.then(db => console.log('Db connected'))
	.catch(err => console.log(err));	
	
// importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 6969);
// app.set('views', __dirname + 'views');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// moddlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
// routes
app.use('/', indexRoutes);
// starting the server
app.listen(app.get('port'), () => {
	console.log(`Servidor corriendo en el puerto ${app.get('port')}`);

});

