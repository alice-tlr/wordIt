var express = require('express')

module.exports = {
  get: get
}


var wordsArray = [{
  word:'banane',
  scramble:'enanab',
  id:1
}, {
  word:'pizza',
  scramble:'azzip',
  id:2
}, {
  word:'house',
  scramble:'esuoh',
  id:3
}, {
  word:'car',
  scramble:'rac',
  id:4
}, {
  word:'work',
  scramble:'krow',
  id:5
}, {
  word:'brain',
  scramble:'niarb',
  id:6
}]



function get(req, res){
  var word = wordsArray[0]
 res.render('main',word)
}



var displaywords = "";

function displayWord(){
  for(var i = 0; i<wordsArray.length; i++){
    console.log(wordsArray[word[1]])
  }
}


function resWords(){

}


function matchWord(){}
