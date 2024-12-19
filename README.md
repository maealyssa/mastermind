# Mastermind

Mastermind is a game where the computer generates a series of random numbers. The user has 10 tries to guess the number correctly and receives feedback after each attempt. 
The feedback only indicates how many positions and or numbers were guessed correctly. 

## Code

This project was built using Babel, PostCSS and Webpack to build the project. The random numbers were generated from the API (https://www.random.org/clients/http/api/). 
The most difficult portion of the project was trying to break it down step by step. First I focused on retrieving the data from the API and worked on comparing it to the user's inputs. Then I began to create the feedback based on the inputs and the attempts left. The remaining portion was having to store the previous feedback and inputs for the user to see. 

## Getting Started

Clone 'mastermind' from Github
`git clone https://github.com/maealyssa/mastermind.git`

Running Mastermind:
```cd mastermind
npm install
npm run build
npm run dev
```

Users will be directed to a localhost on their browser that allows them to run inputs for their guesses.