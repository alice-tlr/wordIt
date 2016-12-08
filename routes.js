var express = require('express')

module.exports = {
  get: get,
  guessWord: guessWord
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

function guessWord(req,res){
  console.log(req.body)
  var guessDone = req.body
  res.render("main", guessDone)
}

// var displaywords = "";
//
// function displayWord(){
//   for(var i = 0; i<wordsArray.length; i++){
//     console.log(wordsArray[word[1]])
//   }
// }
