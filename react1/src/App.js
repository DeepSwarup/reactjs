import React, {useState} from 'react'
import './App.css';

// import Helloyt from './components/Helloyt';

var name= 'deep';

function App() {

  // var myname='Deep';

  // function alertmyname(){
  //   alert(myname);
  // }

  const [name,setname]=useState('deep');
  const [age,setage]=useState(19);

  return (
    <div className="App">
      {/* <button onClick={alertmyname}>click here</button>
      <input type="text" />
  <h1>hello {myname}</h1> */}
      {/* <Helloyt  firstname="deep" lastname="swarup" email="na"/>
      <Helloyt /> */}

      {name} <button onClick={()=>{setname('swarup')}}>CHANGE THE NAME</button>
      {age} <button onClick={()=>{setage(age+1)}}>increase age</button>

    </div>
  );
}

export default App;
