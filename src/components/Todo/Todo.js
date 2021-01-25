import React from 'react';

export default function Todo({ title, completed }) {
  return (
    <div className="todo">
      <p>
        {title}{' '}
        <span
          style={{
            backgroundColor: completed ? 'lightgreen' : 'lightpink',
            color: completed ? 'green' : 'red',
          }}
        >
          {completed ? 'true' : 'false'}
        </span>
      </p>
    </div>
  );
}

//////////////////////
// const user = {
//     id: 123,
//     name: 'qwfwef',
//     email: '2112421'
// }

// console.log(user.id)
// console.log(user.name)
//////////////////////
// const { id, name } = user

// console.log(id)
// console.log(name)
//////////////////////
