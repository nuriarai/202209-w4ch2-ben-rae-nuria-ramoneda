import "./UsedLetters.css";

const UsedLetters = ({ usedLetters }) => {
  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">
        {Array.from(usedLetters).map((letter, index, array) => {
          letter = letter.toUpperCase();
          return (
            <li key={index} className="used-letter">
              {index !== array.length - 1 ? `${letter},\xa0` : letter}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default UsedLetters;
