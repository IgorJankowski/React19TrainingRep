import { memo } from "react";
import img from "../images/luna.jpg";

const JANK_DELAY = 1;

export default memo(function DisplayImage({ filterStyle }) {
  const expensiveRender = () => {
    const start = performance.now();
    while (performance.now() - start < JANK_DELAY) {}
    return null;
  };

  return (
    <>
      {expensiveRender()}
      <img src={img} alt="Luna" style={{ filter: filterStyle }} />
      <p>last renderd: {Date.now()}</p>
    </>
  );
});
