import React from 'react';
import './App.css';
import Heading from "./Heading"

function App() {
  let date = new Date().toLocaleTimeString()
  const [word, setWord] = React.useState(date)

  let timer = (() => {
    return(
      setTimeout(() => {
        date = new Date()
        setWord(date.toLocaleTimeString())
      }, 1000)
    )
  })()
 
  

  return (
    <>
      <Heading message={word} />
    </>
  )
}

export default App;
