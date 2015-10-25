var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var request = require('request');
var methodOverride = require('method-override');
var morgan = require('morgan');

var models = require('./models');

var app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));

models.sequelize.sync().then(function () {
  app.listen(3000, function() {
    console.log('***********************************');
    console.log('listening:', 3000);
    console.log('***********************************');
  });
});

app.use('/home', require('./routes/index'));
app.use('/users', require('./routes/users'));
