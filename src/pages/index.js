import Styles from "./index.css";

import Api from "../components/Api";

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

Promise.resolve(api.generateRandomNums())
    .then((data) => {
        const arr = data.split("\n");
        arr.pop();
        answer = arr;
        console.log(answer)
    })
    .catch(console.error);