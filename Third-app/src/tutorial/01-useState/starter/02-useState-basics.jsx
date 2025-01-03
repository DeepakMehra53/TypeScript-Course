import { useState } from "react";

const UseStateBasics = () => {
  const [count,setCount]=useState(0);
  const handleChange=()=>{
    setCount(count+1)
  }
 

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleChange} className="btn">Click here</button>
    </div>
  )
};

export default UseStateBasics;
