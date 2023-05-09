import { useState } from "react"

export default timer = (() => {
    return(
      setInterval((time) => {
        date = new Date()
        setWord(date.toLocaleTimeString())
        clearInterval(time);
      }, 1000)
    );
  })()