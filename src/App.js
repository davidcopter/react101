import React from 'react';
import Profile from './components/Profile';
// import Greeting from './components/Greeting/Greeting';
// import HelloMessage from './components/HelloMessage';
// import Calculator from './components/Calculator';

function App() {
  // MyProfile
  const user = {
    name: 'Copter',
    email: 'phanuwat@gmail.com',
    city: 'Bangkok',
    birthYear: 1996,
  };

  return (
    <React.Fragment>
      <h1>My Profile</h1>
      <Profile user={user} />
      {/* <Greeting msg="สวัสดีครับ" name="คอปเตอร์" />
      <Greeting msg="สวัสดีครับ" name="tido" />
      <Greeting msg="สวัสดีครับ" name={1 + 3} />
      <HelloMessage name="IronMan" />

      <Calculator a={20} b={9} /> */}
    </React.Fragment>
  );
}

export default App;
