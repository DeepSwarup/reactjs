// import React from 'react'
import { useState } from 'react';


import './App.css';
import Task from './components/Task';

function App() {

  const [taskname, settaskname]=useState('');
  const [time, setTime]=useState('');
  const [tasklist, settasklist]=useState([]);

  const addtask=()=>{
    settasklist([...tasklist, {task:taskname, time: time}])
    settaskname('')
    setTime('')
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <label>Task Name:</label>
      <input type='text' id='task' onChange={(e)=>{settaskname(e.target.value);}}></input>
      <label>Time:</label>
      <input type='text' id='time'onChange={(e)=>{setTime(e.target.value);}}></input>

      <button onClick={addtask}>Add</button>

      {/* <Task taskname="do homework" time="20 min"/> */}

      {tasklist.map((task)=>{
        return <Task taskname={task.task} time={task.time}/>
      })}
    </div>
  );
}

export default App;
