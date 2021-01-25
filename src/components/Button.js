import React, { useState } from 'react';

export default function Button() {
  const [count, setCount] = useState(0);

  //   const handleClick = () => {
  //     console.log('I am button!!!!');
  //   };

  const handleAddClick = () => {
    setCount(count + 1);
  };

  //   count handleAddClick = () => setCount(count + 1);

  //   return <button onClick={handleClick}>Click Me Please</button>;
  return (
    <React.Fragment>
      <p>Count: {count}</p>
      <button onClick={handleAddClick}>Add</button>
      <button onClick={() => setCount(count - 1)}>Remove</button>
    </React.Fragment>
  );
}
