import {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {

  // useEffect

  const [number,setnumber]=useState(0)

  useEffect(()=>{
    console.log('page rendered');
  },[number])


  // useRef

  const input= useRef(null);

  const changetheplaceholder=()=>{
    input.current.placeholder='deep';
    input.current.focus();
  }

  return (

    
    <div className="App">

      {/* useEffect */}
     {number}<button onClick={()=>{setnumber(number+1);}}>increase</button>

    {/* useRef */}

    <input type="text" placeholder='name' ref={input}/>
    <button onClick={changetheplaceholder}>change</button>
     
    </div>

   

    

  );
}

export default App;
