import React from 'react';
import './App.css';
import Heading from "./Heading"
import ModeToggler from "./ModeToggler"

function App() {
  const date = new Date()

  const [word, setWord] = React.useState("Eat")

  function handleClick(){
    setWord("Dine")

  }

  return (
    <>
      <Heading message={word + " at Little Lemon"} />
      <button onClick={ handleClick }>Click</button>
      {/* <ModeToggler /> */}
    </>
  )
}

export default App;
