import Styles from "./index.css";

import Api from "../components/Api";
import UserInputs from "../components/UserInputs";

const computerFeedback = document.querySelector(".computerFeedback");
const attemptsLeft = document.querySelector(".attemptsLeft");
const submitBtn = document.querySelector(".submitBtn");
const newGameBtn = document.querySelector(".newGameBtn");

// ! ||--------------------------------------------------------------------------------||
// ! ||                                     API                                        ||
// ! ||--------------------------------------------------------------------------------||
const api = new Api({
  baseUrl:
    "https://www.random.org/integers/?num=4&min=0&max=8&col=1&base=10&format=plain&rnd=new",
  headers: {
    "Content-Type": "application/json",
  },
});

let answer;
let attempt = 10;

Promise.resolve(api.generateRandomNums())
  .then((data) => {
    handleApiNums(data);
  })
  .catch(console.error);

// ! ||--------------------------------------------------------------------------------||
// ! ||                                      Handlers                                  ||
// ! ||--------------------------------------------------------------------------------||

const handleApiNums = (data) => {
  const arr = data.split("\n");
  arr.pop();
  answer = arr;
  console.log(answer);
};

const handleSubmit = (data) => {
  attempt--;
  handleAttempts(attempt);
  handleCheckAnswer(data);
};

const handleCheckAnswer = (guess) => {
  let correctPosition = 0;
  let correctNum = 0;
  for (let i = 0; i < 4; i++) {
    if (answer[i] == guess[i]) {
      correctPosition += 1;
    }
    if (guess.includes(answer[i])) {
      correctNum += 1;
    }
  }
  handleFeedback(correctNum, correctPosition);
};

const handleFeedback = (num, position) => {
  if (attempt >= 1) {
    if (num === 0 && position === 0) {
      computerFeedback.innerText = "All incorrect";
    } else if (num >= 1 || position >= 1) {
      computerFeedback.innerText = `${num} correct number(s) and ${position} correct location(s)`;
    }
  } else {
    computerFeedback.innerText = "You lost :(";
    submitBtn.classList.add("submitBtn_disabled");
  }
};

const handleAttempts = (attempt) => {
  attemptsLeft.innerText = attempt;
};

// ! ||--------------------------------------------------------------------------------||
// ! ||                              event listeners                                   ||
// ! ||--------------------------------------------------------------------------------||

const userInputs = new UserInputs(handleSubmit);
userInputs.setEventListeners();

newGameBtn.addEventListener("click", () => {
  location.reload();
});
