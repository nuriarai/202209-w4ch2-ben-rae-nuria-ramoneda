import { useState, useEffect } from "react";
import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";

function App() {
  const [usedLetters, setUsedLetters] = useState(new Set([]));
  const [totalErrors] = useState(0);

  const randomWords = [
    "arbol",
    "camisa",
    "pantalla",
    "rendimiento",
    "ahorcado",
  ];
  const alphabetLetters = "abcdefghijklmnñopqrstuvwxyz";

  const handleLetterClick = (letterToAdd) => {
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
        <GuessLetters randomWord={randomWords[0]} />
        <Result totalErrors={totalErrors} />
        <Letters
          alphabetLetters={alphabetLetters}
          onLetterClick={handleLetterClick}
        />
      </div>
    </>
  );
}

export default App;
