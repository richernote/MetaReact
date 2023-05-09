import React from 'react';
import './App.css';

function App() {

  handleClick = () => {
    randomNumber = Math().floor(Math.random() * 3) + 1
    console.log(randomNumber)


  }

  return (
    <>
      <h1>
      "Task: Add a button and handle a click event"
      </h1>

      <button onClick={ handleClick }>
        Etner a Number between 1 and 3
      </button>
    </>
  )
}

export default App;
