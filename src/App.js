import React from 'react';
import './App.css';

function App() {

  function randomNum() {
    const ranInt = Math.floor(Math.random() * 3) + 1
    console.log(ranInt)
    const userInput = prompt("What's you're guess?")
    alert(`Your guess was ${userInput}. The answer is ${ranInt}.\nYou were ${userInput == ranInt? "correct!" : "wrong, try again"}
    `)
  }

  return (
    <>
      <h1>
        Task: Add a button and handle a click event
      </h1>

      <button onClick={ randomNum }>
        Etner a Number between 1 and 3
      </button>
    </>
  )
}

export default App;
