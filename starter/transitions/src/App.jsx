import { useEffect, useState } from "react";
import getScore from "./getScore";
import Score from "./Score";

export default function App() {
  const [isPending, setIsPending] = useState(true);
  const [game, setGame] = useState(1);
  const [score, setScore] = useState({ home: "-", away: "-" });

  async function getNewScore(game) {
    setIsPending(true);
    setGame(game);
    const newScore = await getScore(game);
    setScore(newScore);
    setIsPending(false);
  }

  useEffect(() => {
    getNewScore(game);
  }, [game]);

  return (
    <div className="app">
      <h1>Game {game}</h1>
      <select
        disabled={isPending}
        onChange={(e) => getNewScore(e.target.value)}
      >
        <option value={1}>Game 1</option>
        <option value={2}>Game 2</option>
        <option value={3}>Game 3</option>
        <option value={4}>Game 4</option>
        <option value={5}>Game 5</option>
        <option value={6}>Game 6</option>
        <option value={7}>Game 7</option>
      </select>
      <div className={`loading-container ${isPending ? "loading" : ""}`}>
        <span className="spinner">lol</span>
      </div>
      <div>
        <Score
          isPending={isPending}
          homeImage={score.homeImage}
          homeName={score.homeName}
          home={score.home}
          awayImage={score.awayImage}
          awayName={score.awayName}
          away={score.away}
        ></Score>
      </div>
    </div>
  );
}
