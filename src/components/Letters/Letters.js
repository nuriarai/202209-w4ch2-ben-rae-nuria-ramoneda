import "./Letters.css";

const Letters = ({ alphabetLetters }) => {
  console.log(alphabetLetters);
  return (
    <ul className="letters">
      {alphabetLetters.split("").map((letter) => {
        return (
          <li key={letter} className="letter">
            <a href={letter}>{letter.toUpperCase()}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Letters;
