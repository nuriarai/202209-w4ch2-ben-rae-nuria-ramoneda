# Data Layer

## Data

- A Set of used letters (App component)
- An Array of alphabet letters (App component)
- The number of errors (App component)
- An array of random words (App component)

## Data modification

- Add new used letters to the Set of used letters
- Calculate the number of errors

---

# Components

## App

### Show data

- Show the
  - UsedLetters component
  - Show the Hangman component
  - Show the GuessLetters component
  - Show the Result component
  - Show the Letters component

## UsedLetters

### Show data

- Show the
  - title level 2 with the text 'Used letters'
  - list element for each used letter in the received array of used letters

## Hangman

### Show Data

- Show the same number of Hangman drawing stages as the received number of errors

## GuessLetters

### Show data

- Show a list element for each letter of the received word to be guessed
  - an empty list element if the letter has not been guessed
  - the letter if the letter has been guessed

## Result

### Show data

- Show the message "You're alive" if the user wins the game
  - the message " You're dead!" if the user loses the game

## Letters

### Show data

- Show a letter for each letter in the received alphabet array

### Get action

- Call the received action on click
