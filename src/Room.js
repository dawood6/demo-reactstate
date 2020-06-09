import React, { useState, } from 'react'
import './Room.css'

const Room = () => {
    let [isLit, setLit] = useState(true)
    let [age, setAge] = useState(24)
    // const update = () => {
    //     console.log("button clicked")
    //     setLit(!isLit);
    // }
    // const updateAge = () => {
    //     console.log("button clicked")
    //     setAge(++age)
    // }
    return (
        <div className={`room  ${isLit? "lit":"dark"}`}>
            This Is Room Component  {isLit ? "lit" : "dark"}
            <br />
          Age : {age}
            <br />
            <button onClick={() => setLit(!isLit)}>Toogle Light</button>
            <br />
            <button onClick={() => setAge(++age)}>Increase Age</button>
        </div>
    )
}

export default Room
