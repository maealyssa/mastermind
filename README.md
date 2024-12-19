# Mastermind

Mastermind is a game where the computer generates a series of random numbers. The user has 10 tries to guess the number correctly and receives feedback after each attempt. 
The feedback only indicates how many positions and or numbers were guessed correctly. 

## Code

This project was built using Babel, PostCSS and Webpack to build the project. The main logic used was comparing the user's inputs to the random numbers retrieved from the API (https://www.random.org/clients/http/api/).

## Getting Started

Clone 'mastermind' from Github
`git clone https://github.com/maealyssa/mastermind.git`

Running Mastermind:
`cd mastermind
npm install
npm run build
npm run dev`

Users will be directed to a localhost on their browser that allows them to run inputs for their guesses.