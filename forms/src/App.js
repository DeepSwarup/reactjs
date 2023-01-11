import {useState} from 'react';
import './App.css';

function App() {

  const [firstname,setfirstname]=useState('')
  const [lastname,setlastname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')

  const submitform=()=>{
    var user= {firstname: firstname, lastname:lastname, email: email, password: password}
    console.log(user)
  }

  return (
    <div className='App'>
     
     <form >
      <label htmlFor='firstname'>first name</label>
     <input type="text" id='firstname' onChange={(e)=>{setfirstname(e.target.value);}}/>
     <label htmlFor='lastname'>last name</label>

     <input type="text" id='lastname' onChange={(e)=>{setlastname(e.target.value);}}/>
     <label htmlFor='email'>email</label>

     <input type="text" id='email' onChange={(e)=>{setemail(e.target.value);}}/>
     <label htmlFor='password'>password</label>

     <input type="password" id='password' onChange={(e)=>{setpassword(e.target.value);}}/>
    

     {/* <input type='submit'/> */}
     <input type="button" onClick={submitform} />


     </form>
  
    </div>
  );
}

export default App;
