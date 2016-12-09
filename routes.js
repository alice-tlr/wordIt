var express = require('express')

module.exports = {
  get: get,
  guessWord: guessWord,
  tryagain: tryagain,
  correct: correct
  // matchWord:matchWord
}

var wordsArray = [{
  word:'banana',
  scramble:'ananab',
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

function get(req, res) {
  var word = wordsArray[0]
  res.render('home', word)
}

function tryagain(req, res) {
  var scrambles = {
    id: Number(req.query.id) + 1,
    scramble: wordsArray[Number(req.query.id)].scramble
  }
   res.render('tryagain', scrambles)
}

function correct(req, res) {
  var scrambles = {
    id: Number(req.query.id) + 1,
    scramble: wordsArray[Number(req.query.id)].scramble
  }
   res.render('correct', scrambles)
}

function guessWord(req, res){
  var guess = req.body.guess
  var idx = Number(req.body.id) - 1
  var pair = wordsArray[idx]
  console.log(idx)

  if (guess === pair.word ) {
    res.redirect('/correct/?id=' + (idx + 1))
  } else {
    res.redirect('/tryagain/?id=' + idx)
    // res.redirect('/correct')
  }
}

// function matchWords(){
//
//   if(matched = true ){
//     return "Congrats!"
//   }else{
//     return "Try again"
//   }
//   console.log(matchWords)
// }




// guessDone.
// function matchWord(){
//   if(guessWord() )
//
// }

// var displaywords = "";
//
// function displayWord(){
//   for(var i = 0; i<wordsArray.length; i++){
//     console.log(wordsArray[word[1]])
//   }
// }
