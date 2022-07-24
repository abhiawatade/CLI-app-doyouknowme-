var readlineSync = require("readline-sync");
var score = 0
var userName = readlineSync.question("What is your name? ")

console.log("Welcome " + userName + "!" + " Do you know me ?");

// data structure for high score
var highScore = ["Nilesh : 4"
];

// creating function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("right ! ")
    score = score + 1
  }

  else {
    console.log("wrong !")

  }

  console.log("Current score : ", score)
  console.log("---------------")
}


// creating array of questions

var questions = [{ question: "Where do i live ? ", answer: "Pune" },
{ question: "Who is my favorite superhero ? ", answer: "Iron Man" },
{ question: "What i enjoy more Anime or movies? ", answer: "Anime" },
{ question: "What is my favorite drink ? ", answer: "Tea" },
{question: "What is my favorite hobbie ? ", answer: "Watching movies" },
{ question: "What is my favorite street food ? ", answer: "Pani puri" } , 
{ question: "Which is my favorite anime ? ", answer: "Naruto" },
{ question: "Who is my favorite indian singer ? ", answer: "Arijit Singh" },
{ question: "What is my favorite song? ", answer: "Tum hi ho" },
{ question: "Who is my favorite actor? ", answer: "Ryan gosling" },
{ question: "What is my favorite game  ? ", answer: "Cricket" }
];


for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)

}

console.log("Your score is : ", score + " Thanks for playing this game")

console.log("Check out the Highscores :   ")

for (var x = 0; x < highScore.length; x++) {
  console.log(highScore[x])
}
if (score <= 4) { console.log("you failed to beat highscore") }

else { console.log("Congrats You have beaten highscore , send me a screenshot ") }


console.log("------THE END-------")