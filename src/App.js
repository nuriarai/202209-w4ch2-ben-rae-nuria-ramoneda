import { useState } from "react";
import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";

function App() {
  const [usedLetters, setUsedLetters] = useState(new Set([]));
  const [totalErrors, setTotalErrors] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const randomWords = [
    "arbol",
    "camisa",
    "pantalla",
    "rendimiento",
    "ahorcado",
  ];

  const randomIndex = Math.floor(Math.random() * randomWords.length);
  const [wordToGuess] = useState(randomWords[randomIndex]);

  const getTotalErrors = () =>
    Array.from(usedLetters).filter((letter) => !wordToGuess.includes(letter))
      .length;

  const checkIsWon = () =>
    wordToGuess.split("").every((letter) => usedLetters.has(letter));

  const alphabetLetters = "abcdefghijklmnñopqrstuvwxyz";

  const addLetterToUsedLetters = (letterToAdd) => {
    const newUsedLetters = [...usedLetters, letterToAdd];
    setUsedLetters(new Set(newUsedLetters));
    setTotalErrors(getTotalErrors());
    setIsWon(checkIsWon());
  };

  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters usedLetters={usedLetters} />
          <Hangman totalErrors={totalErrors} />
        </div>
        <GuessLetters wordToGuess={wordToGuess} usedLetters={usedLetters} />
        <Result totalErrors={totalErrors} isWon={isWon} />
        <Letters
          alphabetLetters={alphabetLetters}
          onLetterClick={addLetterToUsedLetters}
        />
      </div>
    </>
  );
}

export default App;
