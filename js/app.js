'use strict';

console.log('hello world');

var score = 0;

var userName = prompt('Welcome, what is your name?');
alert('Hello ' + userName + '.');

function questionOne() {
  var responseOne = prompt('Am I a Code Fellows student?').toLowerCase();
  //var normalizedQue1 = que1.toLowerCase();

  if (responseOne === 'yes' || responseOne === 'y') {
    //console.log('Yes, I am a Code Fellows student.');
    score++;
    alert('That\'s right.');
  } else if (responseOne === 'no' || responseOne === 'n') {
    alert('I feel like you should know the right answer to this...');
  } else {
    alert('That\'s not a yes or no answer');
  }
}

questionOne();

function questionTwo() {
  var responseTwo = prompt('Do I own a cat?').toLowerCase();

  if (responseTwo === 'yes' || responseTwo === 'y') {
    //console.log('I own 0 cats and 1 dog.);
    alert('Nope, I have a 3 year old pitbull/husky (pitsky) named Chai');
  } else if (responseTwo === 'no' || responseTwo === 'n') {
    score++;
    alert('Correct, but I do have a 3 year old pitbull/husky (pitsky) named Chai');
  } else {
    alert('That\'s not a yes or no answer');
  }
}

questionTwo();

function questionThree() {
  var responseThree = prompt('Am I over 30?').toLowerCase();

  if (responseThree === 'yes' || responseThree === 'y') {
    //console.log('That\'s right.');
    score++;
    alert('I am 34.');
  } else if (responseThree === 'no' || responseThree === 'n') {
    alert('Wrong, I was born in 1987');
  } else {
    alert('That\'s not a yes or no answer');
  }
}

questionThree();

function questionFour() {
  var responseFour = prompt('Was I in the Army?').toLowerCase();

  if (responseFour === 'no' || responseFour === 'n') {
    //console.log('I was in the Navy.');
    score++;
    alert('True, I was in the Navy.');
  } else if (responseFour === 'yes' || responseFour === 'y') {
    alert('I was in the Navy');
  } else {
    alert('That\'s not a yes or no answer');
  }
}

questionFour();

function questionFive() {
  var responseFive = prompt('Am I gonna pass this class?').toLowerCase();

  if (responseFive === 'yes' || responseFive === 'y') {
    //console.log('I will pass!');
    score++;
    alert('Thanks for believing in me, ' + userName + '!');
  } else if (responseFive === 'no' || responseFive === 'n') {
    alert('Seriously?! ' + userName);
  } else {
    alert('That\'s not a yes or no answer, ' + userName + '.');
  }
}

questionFive();

function questionSix() {
  var count = 4;
  var myNumber = 7;

  for (var i = 0; i < count; i++) {
    var responseSix = parseInt(prompt('What number am I thinking?'));
    if (responseSix === myNumber) {
      score++;
      alert('Correct.');
      break;
    } else if (responseSix < myNumber) {
      alert('Too low.');
    } else if (responseSix > myNumber) {
      alert('Too high.');
    }
    if (i === count - 1) {
      alert(`The correct answer is ${myNumber}.`);
    }
  }
}

questionSix();

function questionSeven() {
  var countTwo = 6; //variable for number of guesses allowed
  var myFavoriteExercises = ['kickboxing', 'weight lifting', 'hiking', 'snowboarding']; //array of fav exercise
  var rightAnswer = false; //variable rightAnswer will be assigned the false value

  for (var i = 0; i < countTwo; i++) { //set variable to 0; when variable is less than 6, add 1 to variable
    var responseSeven = prompt('Can you guess any of my favorite ways to get exercise?');

    for (var j = 0; j < myFavoriteExercises.length; j++) {// setting a different variable to 0 (first value: kickboxing); when variable is less than number of values in array; add one to variable
      if (responseSeven === myFavoriteExercises[j]) { // if response given by user matches any item in array, alert yes
        score++;
        alert(`Yes, ${myFavoriteExercises[j]} is one of my favorite ways get to exercise!`);
        rightAnswer = true; //righAnswer is true or !false (not false)
      }
    }
    if (rightAnswer) { //at this moment rightAnswer has a true value as assigned on line 103
      break; //if it is the right answer break the code
    }

  }
  if (i === countTwo || rightAnswer) { // if i reaches 6 or matches a right answer, alert My favorite...
    alert(`My favorite ways to get exercise are kickboxing, weight lifting, hiking, and snowboarding.`);

  }

  alert(`You got ${score} out of 7 questions right!`);
}

questionSeven();
score = 0; // reset score after quiz
