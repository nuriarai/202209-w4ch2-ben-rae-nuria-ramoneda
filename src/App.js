import { useState } from "react";
import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";

function App() {
  const [usedLetters, setUsedLetters] = useState(new Set());
  const [totalErrors, setTotalErrors] = useState(0);

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
          <UsedLetters />
          <Hangman />
        </div>
        <GuessLetters />
        <Result />
        <Letters />
      </div>
    </>
  );
}

export default App;
