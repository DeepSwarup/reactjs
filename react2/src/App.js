import { useState } from "react";
import "./App.css";

function App() {
  const [showheader, setshowheader] = useState(false);

  const [name, setname]=useState('');
  const [listofnames, setlistofnames]=useState([]);

  return (
    <div className="App">
      {/*  ternary operator */}
      <button onClick={() => setshowheader(true)}>
        show <header></header>
      </button>
      {showheader ? <h1>hello</h1> : <h1>no hello</h1>}


    {/* destructuring array */}

    <input type='text' onChange={(event)=>{setname(event.target.value);}}/>

    <button onClick={()=>{setlistofnames([...listofnames,name]);setname('');console.log(listofnames);}}>Add name</button>

    {listofnames.map((value,key)=>{
      return <h1 key={key}>{value}</h1>
    })}


    </div>
  );
}

export default App;
