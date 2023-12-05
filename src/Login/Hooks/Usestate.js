import React, { useState} from 'react';

const Usestate = () => {
    const [count,setCount] = useState(0);
    const handle = () => {
        setCount(count+1)
    }
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={handle}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>
  );
};

export default Usestate