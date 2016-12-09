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
 res.render('main',word)
}


function guessWord(req,res){
  var guessDone = req.body
  console.log(req.body)
  res.render("main", guessDone)
  var matchWord =  guessDone.match(wordsArray[0].word)
  var matchid  = guessDone.match(wordsArray[0].id)
    if(matchWord === true && matchid === true){
      return 'Congrats, You word IT'
    }else {return 'Try again'
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
