//Required Dependencies
var bodyParser = require('body-parser')
var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')

var route = require('./routes')

//Middleware modules
var app = express()
app.engine('hbs', hbs({
  defaultLayout:'main',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

//Routes
app.get('/', route.get)
app.post('/guessword', route.guessWord)

module.exports = app
