$(document).ready(function () {
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
  $('#answer').fadeIn(4000);
  magic8Ball.askQuestion = function (question) {
    // create a random number
    var randomNumber = Math.random();

    // make the random number between 0 and the number of items in your array
    var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;

    // round down the number to be a whole number
    var randomIndex = Math.floor(randomNumberForListOfAnswers);

    // use that number to index a random number from the answers array
    var answer = this.listOfAnswers[randomIndex];

    $('#answer').text(answer);

    console.log(question);
    console.log(answer);
  };
//   var randomDance = magic8Ball.askQuestion('Will I get a new job?');

  var onClick = function () {
    $('#answer').hide();
    var question = prompt('ASK A YES/NO QUESTION!');
    magic8Ball.askQuestion(question);
    $('#answer').hide();
    $('#8ball').effect('shake');
    $('#answer').fadeIn(4000);
    $('#8ball').attr(
      'src',
      'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png'
    );
  };

  //wait half a second before showing prompt
  setTimeout(function () {
    //show prompt
    var question = prompt('Ask a yes or no question');
    magic8Ball.askQuestion(question);
  }, 500);
  $('#questionButton').click(onClick);
});
