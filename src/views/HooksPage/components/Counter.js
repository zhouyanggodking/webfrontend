import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('use Effect called')
    return () => {
      console.log('use Effect clean up')
    };
  });


  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
};

export default Counter;