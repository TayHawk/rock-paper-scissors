function welcomeMSG() {
  alert("🍀Welcome to the Rock, Paper, Scissors game!🍀");
  alert(
    "=> Here are the rules:\n  1) You will choose either: r for Rock, p for Paper, s for Scissors.\n  2) The computer will also choose an option.\n  3) Rock beats scissors, paper beats rock, and scissors beats paper."
  );
}

function getUserName() {
  let userName = prompt("What is your user name?");
  while (userName === "") {
    userName = prompt("Please enter your user name!");
  }
  return userName;
}

function playerChoice(name) {
  const VALID_CHOICES = ["r", "p", "s", "rock", "paper", "scissors"];
  let answer = prompt(
    `${name.toUpperCase()} choose Rock, paper, or scissors ? \n Example: "p" for paper`
  ).toLowerCase();
  while (!VALID_CHOICES.includes(answer)) {
    answer = prompt(
      "Please choose a VALID response :\n 'r','p','s'"
    ).toLowerCase();
  }
  return answer;
}

function computerChoice() {
  let answer;
  let ranNum = Math.floor(Math.random() * 3) + 1;
  switch (ranNum) {
    case 1:
      return (answer = "rock");
    case 2:
      return (answer = "paper");

    case 3:
      return (answer = "scissor");
  }
}
function response() {
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

function gameLogic(answer, computerResponse, name) {
  if (answer[0] === "r" && computerResponse === "scissor") {
    alert(`${name} wins 🏆`);
  } else if (answer[0] === "p" && computerResponse === "rock") {
    alert(`${name} wins 🏆`);
  } else if (answer[0] === "s" && computerResponse === "paper") {
    alert(`${name} wins 🏆`);
  } else if (answer[0] === computerResponse[0]) {
    alert("Its a tie! 😅");
  } else {
    alert(`Computer's choice: ${computerResponse}. Computer wins 👾!`);
  }
}

function goodbye() {
  alert("✨Thank you for playing Rock Paper Scissors!✨");
}

do {
  welcomeMSG();
  let name = getUserName().toUpperCase();
  let answer = playerChoice(name);
  let computerResponse = computerChoice();
  gameLogic(answer, computerResponse, name);
} while (response() === "y");
goodbye();
