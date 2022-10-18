import "./GuessLetters.css";

const GuessLetters = ({ wordToGuess, usedLetters }) => {
  return (
    <ul className="guess-letters">
      {wordToGuess.split("").map((letter, index) => {
        let letterIsGuessed;
        if (
          usedLetters.has(letter.toLowerCase()) ||
          usedLetters.has(letter.toUpperCase())
        ) {
          letterIsGuessed = true;
        }
        return (
          <li
            key={index}
            className={`guess-letter${!letterIsGuessed ? " empty" : ""}`}
          >
            {letterIsGuessed && letter}
          </li>
        );
      })}
    </ul>
  );
};

export default GuessLetters;
