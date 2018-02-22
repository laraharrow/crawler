const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const port = 3000;
mongoose.connect('mongodb://localhost/pintProject');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

app.listen(port, function() {
	console.log(`running server on port ${port}`);
});