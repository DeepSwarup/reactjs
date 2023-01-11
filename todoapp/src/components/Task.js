import React from 'react';

export default function Task({taskname, time}) {
  return (
    <div className='task'>

        <h1>Task Name: {taskname}</h1>
        <h1>Time to complete: {time}</h1>
    
    </div>
  )
}
