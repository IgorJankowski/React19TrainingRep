import { marked } from "marked";
import markdownContent from "./markdownContent";
import MarkdownPreview from "./MarkdownPreview";
import { useState, useEffect, useMemo, useCallback } from "react";

export default function App() {
  const [text, setText] = useState(markdownContent);
  const [time, setTime] = useState(Date.now());
  const [theme, setTheme] = useState("green");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 1000);
  }, []);
  const options = useMemo(
    () => ({
      text,
      theme,
    }),
    [text, theme]
  );
  const render = useCallback((text) => marked.parse(text), []);

  return (
    <div className="app">
      <h1>React skibidi</h1>
      <h2>Curr time: {time}</h2>
      <label htmlFor="theme">
        Choose a theme{" "}
        <select onChange={(e) => setTheme(e.target.value)}>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
          <option value="purple">purple</option>
        </select>
      </label>
      <div className="markdown">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="markdown-editor"
        ></textarea>
        <MarkdownPreview options={options} render={render}></MarkdownPreview>
      </div>
    </div>
  );
}
