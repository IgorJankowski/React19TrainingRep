export default function Slider({ value, deffered, onChange, name, max }) {
  return (
    <li className="slider">
      <label htmlFor={name}>
        {name}
        {value !== deffered ? "(Updating)" : ""}
      </label>
      <input
        type="range"
        id={name}
        name={name}
        min="0"
        max={max}
        value={value}
        onChange={onchange}
      ></input>
      <output htmlFor="name">
        Value: {value} | Deffered value: {deferred}
      </output>
    </li>
  );
}
