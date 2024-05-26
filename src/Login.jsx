import React, { useState } from 'react';
 
import './login.css'
import Booking from './Booking';
const Children = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);
  const data=[
    {username:"mani",password:123},
    {username:"kani",password:345}
  ]

  const validation = (e) => {
    e.preventDefault();
    const user=data.find((user)=>user.username==username && user.password==password);
    if (user) {
      setLoggedin(true);
      alert("Login successful");
    
     
    } else {
      alert("Enter valid username and password");
    }
  };

  return (
    <>
    
    {!loggedin&&(
      <div className='background'>
    <div className='form'>
      <form  className=" form-items" onSubmit={validation}>
        <h1>Login-in</h1>
        <label>username:</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <label>password:</label>
        <input
          type='password'
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Submit</button>
      </form>
      </div>
      </div>
    )}

      {
        loggedin && (
        <Booking/>
        )
      }
     
    </>
  );
};

export default Children;

