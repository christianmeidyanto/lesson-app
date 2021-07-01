import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Sandy");
  const [age, setAge] = useState(50);

  const handleClick = () => {
    setName("Romi");
    setAge(23);
  };
  return (
    <div className="home">
      <h2>HomePage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
