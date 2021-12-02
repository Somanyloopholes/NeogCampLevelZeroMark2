let readlineSync = require("readline-sync");

let score = 0;

const highscore = [{
   playerName: "siddharth",
   playerScore: 5
 }];

const questions = [{
  q: `How many times did Sebastian Vettel win the indian grand prix? 
  a. 3
  b. 4
  `,
  a: "a"
}, {
  q: `How many indian grand prixs have been held? 
  a. 0
  b. 3
  `,
  a: "b"
},
{
  q: `Which grand prix is the oldest on the current season
  a. Monaco
  b. India
  `,
  a: "a"
  
},
{
  q: `How many world champions are there on the current grid?
  a. 20
  b. 4
  `,
  a: "b"
  
},
{
  q:`How many world champions have won 7 world drivers championships? 
  a. 0
  b. 2
  `,
  a:"b"
}];

console.log(`-------------------------`);
console.log("Welcome to the Formula1 Quiz");
console.log(`-------------------------`);

let userName = readlineSync.question('May I have your name? ');
console.log(`Hey ${userName}, let's see how well you know Formula1 (Enter a or b as answer)`);
console.log(`-------------------------`);

for (let i = 0; i < questions.length; ++i) {
  let currQ = questions[i];
  let theirAnswer = readlineSync.question(currQ.q);

  if (theirAnswer.toUpperCase() === currQ.a.toUpperCase()) {
    ++score;
    console.log("Correct");
  }
  else {
    console.log("Wrong");
  }
  console.log(`Your score is :${score}`);
  console.log(`-------------------------`);
}

highscore.push({playerName:`${userName}`, playerScore:score});

console.log(`Highscores:`);
console.log(`-------------------------`);
for(let i=0; i<highscore.length; ++i){
  let currPlayer = highscore[i];
  console.log(`Player:${currPlayer.playerName}  |  Score:${currPlayer.playerScore}`);
  
}


