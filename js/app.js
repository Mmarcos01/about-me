'use strict';

console.log('hello world');

var userName = prompt('Welcome, what is your name?');
alert('Hello ' + userName + '.');

var responseOne = prompt('Am I a Code Fellows student?').toLowerCase();
//var normalizedQue1 = que1.toLowerCase();

if(responseOne === 'yes' || responseOne === 'y') {
  //console.log('Yes, I am a Code Fellows student.');
  alert('That\'s right.');
} else if (responseOne === 'no' || responseOne === 'n') {
  alert('I feel like you should know the right answer to this...');
} else {
  alert('That\'s not a yes or no answer');
}

var responseTwo = prompt('Do I own a cat?').toLowerCase();

if(responseTwo === 'yes' || responseTwo === 'y') {
  //console.log('I own 0 cats and 1 dog.);
  alert('Nope, I have a 3 year old pitbull/husky (pitsky) named Chai');
} else if (responseTwo === 'no' || responseTwo === 'n') {
  alert('Correct, but I do have a 3 year old pitbull/husky (pitsky) named Chai');
} else {
  alert('That\'s not a yes or no answer');
}

var responseThree = prompt('Am I over 30?').toLowerCase();

if(responseThree === 'yes' || responseThree === 'y') {
  //console.log('That\'s right.');
  alert('I am 34.');
} else if (responseThree === 'no' || responseThree === 'n') {
  alert('Wrong, I was born in 1987');
} else {
  alert('That\'s not a yes or no answer');
}

var responseFour = prompt('Was I in the Army?').toLowerCase();

if(responseFour === 'no' || responseFour === 'n') {
  //console.log('I was in the Navy.');
  alert('True, I was in the Navy.');
} else if (responseFour === 'yes' || responseFour === 'y') {
  alert('I was in the Navy');
} else {
  alert('That\'s not a yes or no answer');
}

var responseFive = prompt('Am I gonna pass this class?').toLowerCase();

if(responseFive === 'yes' || responseFive === 'y') {
  //console.log('I will pass!');
  alert('Thanks for believing in me! ' + userName);
} else if (responseFive === 'no' || responseFive === 'n') {
  alert('Seriously?! ' + userName);
} else {
  alert('That\'s not a yes or no answer. ' + userName);
}


var count = 4;
var myNumber = 7;


for (var i = 0; i < count; i++) {
  var responseSix = parseInt(prompt('What number am I thinking?'));
  if (responseSix === myNumber) {
    alert('Correct.');
    break;
  }else if (responseSix < myNumber){
    alert('Too low.');
  }else if (responseSix > myNumber){
    alert('Too high.');
  }
  if (i === count-1){
    alert(`The correct answer is ${myNumber}.`);
  }
}

var myFavoriteColors = ['blue', 'green', 'purple'];

for (var i = 0;)
var responseSeven = prompt('What are my favorite colors?').toLowerCase();







//  var maxGuess = 4;
//  var rightNumber = 7;
//  var guess = false;
 
//   while (maxGuess && !guess){
//     var ourGuess = getRandom();
//     alert('guess again')
//     maxGuess--;
//     if (ourGuess === rightNumber) {
//     var guess = true;
//     }

