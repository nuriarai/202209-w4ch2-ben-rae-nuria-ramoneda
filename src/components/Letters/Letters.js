import "./Letters.css";

const Letters = ({ alphabetLetters, onLetterClick }) => {
  const handleLetterClick = (event) => {
    event.preventDefault();
    onLetterClick(event.target.textContent);
  };

  return (
    <ul className="letters">
      {alphabetLetters.split("").map((letter) => {
        return (
          <li key={letter} className="letter" onClick={handleLetterClick}>
            <a href={letter}>{letter.toUpperCase()}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Letters;
