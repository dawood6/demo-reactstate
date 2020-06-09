import React, { useState, } from 'react'
import './Room.css'

const Room = () => {
    let [isLit, setLit] = useState(true)
    let [temprature, Settemprature] = useState(72)
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
            <button onClick={() => setLit(true)}>Light Mode</button>
            <button onClick={() => setLit(false)}>Dark Mode</button>

            <br />
          Temprature : {temprature}
            <br />
            <button onClick={() => Settemprature(++temprature)}>+</button>
            <button onClick={() => Settemprature(--temprature)}>-</button>

        </div>
    )
}

export default Room
