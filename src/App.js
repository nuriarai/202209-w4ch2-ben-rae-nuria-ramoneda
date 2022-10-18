import { useState, useMemo } from "react";
import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";

const randomWords = [
  "arbol",
  "camisa",
  "pantalla",
  "rendimiento",
  "ahorcado",
  "MaYusCulAs",
];
const alphabetLetters = "abcdefghijklmnñopqrstuvwxyz";
const randomIndex = Math.floor(Math.random() * randomWords.length);

const App = () => {
  const [usedLetters, setUsedLetters] = useState(new Set([]));
  const [wordToGuess] = useState(randomWords[randomIndex]);

  const getTotalErrors = () =>
    Array.from(usedLetters).filter(
      (letter) =>
        !(
          wordToGuess.includes(letter.toUpperCase()) ||
          wordToGuess.includes(letter.toLowerCase())
        )
    ).length;

  const checkIsWon = () =>
    wordToGuess
      .split("")
      .every(
        (letter) =>
          usedLetters.has(letter.toUpperCase()) ||
          usedLetters.has(letter.toLowerCase())
      );

  const totalErrors = useMemo(getTotalErrors, [usedLetters, wordToGuess]);
  const isWon = useMemo(checkIsWon, [usedLetters, wordToGuess]);

  const addLetterToUsedLetters = (letterToAdd) => {
    const newUsedLetters = [...usedLetters, letterToAdd];
    setUsedLetters(new Set(newUsedLetters));
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
};

export default App;
