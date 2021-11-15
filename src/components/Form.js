import { useState, useEffect } from "react";

function Form() {
  const [name, setName] = useState(" ");
  const [number, setNum] = useState(" ");
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the first button ${count} times.`);
  }, [count]);

  useEffect(() => {
    console.log(`You have clicked the second button ${count2} times.`);
  }, [count2]);

  return (
    <div className="form">
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <p>{name}</p>
      </form>
      <form>
        <input
          type="number"
          value={number}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Phone Number"
        />
        <p>{number}</p>
      </form>
      <div>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <div>
        <button onClick={() => setCount2(count2 + 1)}>Click me</button>
      </div>
    </div>
  );
}

export default Form;
