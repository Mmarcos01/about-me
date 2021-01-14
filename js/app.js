'use strict';

console.log('hello world');

var userName = prompt('Welcome, what is your name?');
alert('Hello ' + userName + '.');

var que1 = prompt('Am I a Code Fellows student?') .toLowerCase();
//var normalizedQue1 = que1.toLowerCase();

//function anythingElse ('That\'s not a yes or no answer') {}

if(que1 === 'yes' || que1 === 'y') {
  //console.log('Yes, I am a Code Fellows student.');
  alert('That\'s right.');
} else if (que1 === 'no' || que1 === 'n') {
  alert('I feel like you should know the right answer to this...');
} else {
  alert('That\'s not a yes or no answer');
}

var que2 = prompt('Do I own a cat?') .toLowerCase();

if(que2 === 'yes' || que2 === 'y') {
  //console.log('I own 0 cats and 1 dog.);
  alert('Nope, I have a 3 year old pitbull/husky (pitsky) named Chai');
} else if (que2 === 'no' || que2 === 'n') {
  alert('Correct, but I do have a 3 year old pitbull/husky (pitsky) named Chai');
} else {
  alert('That\'s not a yes or no answer');
}

var que3 = prompt('Am I over 30?') .toLowerCase();

if(que3 === 'yes' || que3 === 'y') {
  //console.log('That\'s right.');
  alert('I am 34.');
} else if (que3 === 'no' || que3 === 'n') {
  alert('Wrong, I was born in 1987');
} else {
  alert('That\'s not a yes or no answer');
}

var que4 = prompt('Was I in the Army?') .toLowerCase();

if(que4 === 'no' || que4 === 'n') {
  //console.log('I was in the Navy.');
  alert('True, I was in the Navy.');
} else if (que4 === 'yes' || que4 === 'y') {
  alert('Wrong, born in 1987');
} else {
  alert('That\'s not a yes or no answer');
}

var que5 = prompt('Am I gonna pass this class?') .toLowerCase();

if(que5 === 'yes' || que5 === 'y') {
  //console.log('I will pass!');
  alert('Thanks for believing in me! ' + userName);
} else if (que5 === 'no' || que5 === 'n') {
  alert('Seriously?! ' + userName);
} else {
  alert('That\'s not a yes or no answer. ' + userName);
}