import React, { useState } from 'react';

export default function Grade() {
  const [score, setScore] = useState(0);
  const [passScore] = useState(50);

  return (
    <div className="grade">
      <p>Score: {score}</p>
      <p
        style={{
          backgroundColor: score > passScore ? 'green' : 'red',
          color: '#FFFFFF',
        }}
      >
        Status: {score > passScore ? 'ผ่าน' : 'ไม่ผ่าน'}
      </p>
      <button onClick={() => setScore(score + 10)}>Add Score</button>
    </div>
  );
}
