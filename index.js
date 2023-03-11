var readlineSync = require('readline-sync');
var score = 0;

var highScores = [{
  name:"Vicky",
  score: 5
},{
  name:"nishi",
  score: 4
}];

function welcome(){
  userName = readlineSync.question("What is your name? ");
  console.log("Welcome " + userName + " lets play this quiz");
}

var qna = [{question:"Who is God of Shinobi? a: Tobirama Senju b: Hashirama Senju c: Madara Uchiha ",
       answer: "b"},{question:"Who is Yellow Flash of the Leaf? a: Minato Namikaze b: Might Guy c: Itachi Uchiha ",
       answer: "a"},{question:"Who is nine tail jinchuriki? a: Gara b: Hashirama Senju c: Naruto Uzumaki ",
       answer: "c"},{question:"Who is fifth Hokage? a: Tsunade Senju b: Hiruzen Sarutobi c: Madara Uchiha ",
       answer: "a"},{question:"Who has mastered eight inner gates formtion? a: Tobirama Senju b: Might Guy c: Madara Uchiha ",
       answer: "b"}]

function shinobiQuiz(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    score = score + 1;
    console.log("You are right");
  }else{
    console.log("You are wrong");
  }
  console.log("Your score is: " + score);
  
}

welcome();

for(var i=0;i<qna.length;i++){
  var question = qna[i].question;
  var answer = qna[i].answer;
  shinobiQuiz(question,answer);
}

function highScore(){
  console.log("You scored " + score);
  console.log("Check the high score below, if you have scored more than that then send me screenshot of your score");
  for(var i=0;i<highScores.length;i++){
    console.log(highScores[i].name + " : " + highScores[i].score)
  }
}

highScore();