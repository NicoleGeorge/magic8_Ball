var magic8Ball = {};
magic8Ball.listOfAnswers = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes definitely',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
];
// define the method
magic8Ball.askQuestion = function (question) {
  // create a random number
  var randomNumber = Math.random();

  // make the random number between 0 and the number of items in your array
  var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;

  // round down the number to be a whole number
  var randomIndex = Math.floor(randomNumberForListOfAnswers);

  // use that number to index a random number from the answers array
  var answer = this.listOfAnswers[randomIndex];

  console.log(question);
  console.log(answer);
};
var randomDance = magic8Ball.askQuestion('Will I get a new job?');
