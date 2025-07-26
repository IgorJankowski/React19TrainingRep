import { useEffect, useOptimistic, useState, useTransition } from "react";

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [thoughts, setThoughts] = useState([]);
  const [thought, setThought] = useState([]);
  const [optimisticThoughts, addOptimisticThought] = useOptimistic(
    thoughts,
    (oldThoughts, newThought) => [newThought, ...oldThoughts]
  );

  useEffect(() => {
    fetch("/thoughts")
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);

  async function postDeepThought() {
    startTransition(async () => {
      addOptimisticThought(`${thought} (Sending...)`);
      setThought("");
      const response = await fetch("/thoughts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ thought }),
      });

      if (!response.ok) {
        alert("Smth went wrong, try again? heh");
        return;
      }
      const { thoughts: newThoughts } = await response.json();

      setThoughts(newThoughts);
    });
  }

  return (
    <div className="app">
      <h1>Deep Thoughts</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          postDeepThought();
        }}
      >
        <label>What's on your mind?</label>
        <textarea
          id="thought"
          name="thought"
          rows={4}
          cols={33}
          value={thought}
          onChange={(e) => setThought(e.target.value)}
        ></textarea>
        <button type="submit">Add</button>
      </form>
      <ul>
        {optimisticThoughts.map((thought, index) => (
          <li key={index}>{thought}</li>
        ))}
      </ul>
    </div>
  );
}
