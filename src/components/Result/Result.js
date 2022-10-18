import "./Result.css";

const Result = ({ totalErrors, isWon }) => {
  let message = "";
  if (!isWon && totalErrors >= 11) {
    message = "You're dead!";
  }
  if (isWon) {
    message = "You're alive";
  }
  return <section className="game-result">{message}</section>;
};

export default Result;
