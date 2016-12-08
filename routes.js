var express = require('express')

module.exports = {
  get: get
}

function get(req, res){
 var data = {hey:'We got something here'}
 res.render('main',data)
}
