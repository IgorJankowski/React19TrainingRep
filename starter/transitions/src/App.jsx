import { useState } from "react";
import getScore from "./getScore";

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
  return <h1>Transitions</h1>;
}
