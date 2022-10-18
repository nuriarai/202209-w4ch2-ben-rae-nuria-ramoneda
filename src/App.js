import { useState } from "react";
import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";

function App() {
  const [usedLetters] = useState(new Set());
  const [totalErrors] = useState(0);

  const randomWords = [
    "arbol",
    "camisa",
    "pantalla",
    "rendimiento",
    "ahorcado",
  ];
  const alphabetLetters = "abcdefghijklmnñopqrstuvwxyz";

  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters usedLetter={usedLetters} />
          <Hangman totalErrors={totalErrors} />
        </div>
        <GuessLetters
          alphabetLetters={alphabetLetters}
          randomWord={randomWords[0]}
        />
        <Result totalErrors={totalErrors} />
        <Letters />
      </div>
    </>
  );
}

export default App;
