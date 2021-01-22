import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(69);

  const handleClick = () => {
    setName("Luigi");
    setAge(32);
  };

  return (
    <div className="home">
      <h2>HomePage</h2>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Click meh</button>
    </div>
  );
};

export default Home;
