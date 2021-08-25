function welcomeMSG() {
  alert("🍀Welcome to the Rock, Paper, Scissors, Lizard, Spock game!🍀");
  alert(
    "Here are the rules:\n  1) You will choose either: 1 for Rock 👊, 2 for Paper 📄, 3 for Scissors ✂️ 4 for Lizard 🦎 or 5 for Spock 🖖.\n  2) The computer will also choose an option."
  );
}

function getUserName() {
  let userName = prompt("What is your user name?");
  while (userName === "") {
    userName = prompt("Please enter your user name!");
  }
  return userName;
}

const VALID_CHOICES = ["rock", "paper", "scissor", "lizard", "spock"];
const VALID_NUMBER = [1, 2, 3, 4, 5];

function playerChoice(name) {
  let answer = prompt(
    `${name.toUpperCase()} choose ${VALID_CHOICES.join(
      ", "
    )}\n Example: 1 for rock, 2 for paper, ect ?`
  ).toLowerCase();
  while (!VALID_NUMBER.includes(Number(answer))) {
    answer = prompt(
      `Please choose a VALID response :\n ${VALID_CHOICES.join(
        ", "
      )}\n\nExample: 1 for rock, 2 for paper, ect ?`
    ).toLowerCase();
  }
  return answer;
}

function convertAnswer(answer) {
  answer = Number(answer - 1);
  return (answer = VALID_CHOICES[answer]);
}

function computerChoice() {
  let ranNum = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[ranNum];
}

const WINNING_COMBOS = {
  rock: ["scissor", "lizard"],
  paper: ["rock", "spock"],
  scissor: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissor"],
};

function playerWins(answer, computerResponse) {
  return WINNING_COMBOS[answer].includes(computerResponse);
}

function displayWinner(answer, computerResponse, name) {
  if (playerWins(answer, computerResponse)) {
    alert(
      `Computer's choice: ${computerResponse}. You Chose: ${answer}\n\n${name} wins this round🏆`
    );
  } else if (answer === computerResponse) {
    alert(
      `Computer's choice: ${computerResponse}. You Chose: ${answer}\n\nIts a tie! 😅`
    );
  } else {
    alert(
      `Computer's choice: ${computerResponse}. You Chose: ${answer}\n\n Computer wins this round 👾!`
    );
  }
}
const WINNING_SCORE = 5;
let winner = { player: 0, computer: 0 };

function calcScore(answer, computerResponse) {
  if (playerWins(answer, computerResponse)) {
    winner["player"] += 1;
  } else if (playerWins(computerResponse, answer)) {
    winner["computer"] += 1;
  }
}
function displayScore(name) {
  alert(`${name} score: ${winner.player}, Computer score: ${winner.computer}`);
}

function displayGrandWinner() {
  if (winner.player === WINNING_SCORE) {
    alert("🏆YOU ARE THE GRAND WINNER!🏆");
  } else if (winner.computer === WINNING_SCORE) {
    alert("Darn, the computer won this time 😩");
  }
}

function playAgain() {
  let answer;
  const VALID_YES_NO = ["y", "n", "no", "yes"];
  answer = prompt(
    "Would you like to perform another calculation?\n  'y' for yes or  'n' for no."
  ).toLowerCase();
  while (!VALID_YES_NO.includes(answer)) {
    answer = prompt(
      'Please enter a valid response: "yes", "y", "no" or "n"'
    ).toLowerCase();
  }
  return answer[0];
}

function goodbye() {
  alert("✨Thank you for playing Rock Paper Scissors!✨");
}

function resetScore(winner) {
  winner.player = 0;
  winner.computer = 0;
}

do {
  welcomeMSG();
  let name = getUserName().toUpperCase();
  resetScore(winner);

  while (
    !(winner.player === WINNING_SCORE || winner.computer === WINNING_SCORE)
  ) {
    let answer = playerChoice(name);
    answer = convertAnswer(answer);
    console.log(answer);
    let computerResponse = computerChoice();
    playerWins(answer, computerResponse);
    displayWinner(answer, computerResponse, name);
    calcScore(answer, computerResponse);
    displayScore(name);
    displayGrandWinner();
  }
} while (playAgain() === "y");

goodbye();
