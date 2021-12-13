import React, { useState } from "react";

const Common = () => {
  const [count, setCount] = useState("dcds");

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount("hdscuhbds")}>Click me</button>
    </div>
  );
};

export default Common;
