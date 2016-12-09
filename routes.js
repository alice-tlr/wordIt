var express = require('express')

module.exports = {
  get: get,
  guessWord: guessWord
  // matchWord:matchWord
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
  res.render('main', word)
}

function guessWord(req,res){
  var guess = req.body.guess
  var idx = Number(req.body.id) - 1
  var pair = wordsArray[idx]

  if (guess === pair.word ) {
    console.log('Congrats, You word IT')
    res.redirect('/tryagain')
  } else {
    console.log('Try again')
    res.redirect('/correct')
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
