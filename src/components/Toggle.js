import React, { useState, useEffect } from 'react';

export default function Toggle() {
  const [current, setCurrent] = useState(false);

  useEffect(() => {
    console.log('[TOGGLE] USEEFFECT RUNNING');
  }, [current]);

  const handleKeyDown = () => {
    console.log('current', current);
    setCurrent(!current);
  };

  return (
    <div className="toggle">
      <p>Current State is {current ? 'TRUE' : 'FALSE'}</p>
      <button onKeyDown={handleKeyDown}>Toggle Me</button>
    </div>
  );
}
