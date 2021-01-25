import React, { useEffect, useState } from 'react';
import Todo from './components/Todo/Todo';
// import React, { useEffect, useState } from 'react';
// import Button from './components/Button';
// import Toggle from './components/Toggle';
// import Grade from './components/Grade';
// import Profile from './components/Profile';
// import Greeting from './components/Greeting/Greeting';
// import HelloMessage from './components/HelloMessage';
// import Calculator from './components/Calculator';

function App() {
  // const [number, setNumber] = useState(1);

  // useEffect(() => {
  //   setNumber(number + 1);
  //   console.log('USEEFFECT RUNNING!');
  //   document.title = `my number is ${number}`;
  // }, []);

  // MyProfile
  // const user = {
  //   name: 'Copter',
  //   email: 'phanuwat@gmail.com',
  //   city: 'Bangkok',
  //   birthYear: 1996,
  // };

  // return (
  //   <React.Fragment>
  //     {/* <h1>My Profile</h1> */}
  //     {/* <Profile user={user} /> */}
  //     {/* <Greeting msg="สวัสดีครับ" name="คอปเตอร์" />
  //     <Greeting msg="สวัสดีครับ" name="tido" />
  //     <Greeting msg="สวัสดีครับ" name={1 + 3} />
  //     <HelloMessage name="IronMan" />

  //     <Calculator a={20} b={9} /> */}
  //   </React.Fragment>
  // );

  // return <Button />;
  // return (
  //   <React.Fragment>
  //     <Button />
  //     <Toggle />
  //     <Grade />
  //   </React.Fragment>
  // );

  const [data, setData] = useState(null);

  // FETCHING DATA
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => console.log(data));
  }, []);

  return data
    ? data.map((todo) => (
        <Todo title={todo.title} completed={todo.completed} key={todo.id} />
      ))
    : 'Loading';
}

export default App;
