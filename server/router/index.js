const bodyParser = require('body-parser');
const express = require('express');
const expressHandlebars  = require('express-handlebars');

module.exports = (app) => {
	app.engine('.hbs', expressHandlebars({ extname: '.hbs' }));
	app.set('view engine', '.hbs');
	app.set('views', './dist/server/views');
	app.use(bodyParser.json({ limit: '2mb' }));
	app.use(bodyParser.urlencoded({ extended: false, limit: '2mb' }));
	app.use('/', require('./routes/home'));
	app.use('/upload', require('./routes/upload'));	
	app.use(express.static('./dist/client'));
};
