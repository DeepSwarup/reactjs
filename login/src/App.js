import React, {useState} from 'react'


import './App.css';


export default function App() {

  const username='deep';
  const password="password";

  const [usernamestate,setusernamestate]=useState('');
  const [passwordstate,setupasswordstate]=useState('');
  const [loggedin, setloggedin]=useState(false);

  function login(){
    if(usernamestate===username && passwordstate===password){
      setloggedin(true);
    }
  }


  return (
    <div className="App">
     <h1>Login</h1>
     <input type="text" onChange={(event)=>{setusernamestate(event.target.value);}}></input>
     <input type="password" onChange={(event)=>{setupasswordstate(event.target.value);}}></input>
     <button onClick={login}>Submit</button>

     {loggedin && <h1>Loggedin</h1>}
    </div>
  );
}


