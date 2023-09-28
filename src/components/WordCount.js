import React, { useState } from 'react'
import "./AddTask.css";

export default function WordCount() {

  const[taskValue,settaskValue]=useState("");

  function Change(event)
  {
    settaskValue(event.target.value);
  }

  return (
    <div>
      <h1><ins>Word Counter App</ins></h1>
      <div className="addtask">
        <form>
          <label htmlFor="">Enter text to display its count:</label>
          <input onChange={Change} type="text" name="" placeholder="Enter text" />
          </form>
          <p>You have entered :- {taskValue.length} characters</p>
      </div>
    </div>
  )
}
