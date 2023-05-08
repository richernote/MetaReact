import { useState } from "react";


export default function ModeToggler() {

    let [darkModeOn, darkModeSwitch] = useState(true)

    const darkMode = <h1 style={{ 
        background : "navy",
        color : "white"
        }}>
            
            Dark mode is on
        
        </h1>
    const lightMode = <h1 style={{ background : "yellow" }}>Light Mode is on</h1>

    const handledClick = () => {
        
        darkModeSwitch(darkModeOn = !darkModeOn)

        if (darkModeOn) {
            console.log("Dark mode is on")
        } else {
            console.log("Light mode is on")
        }
    }

    return (
        <div>
            { darkModeOn ? darkMode : lightMode }
            <button onClick={ handledClick }>
                Click me
            </button>
        </div>
    );
}