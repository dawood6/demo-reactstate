import React, { useState, } from 'react'

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
        <div>
            This Is Room Component  {isLit ? "lit" : "dark"}
            <br />
          Age : {age}
            <br />
            <button onClick={() => {
                console.log("button clicked")
                setLit(!isLit);
            }}>Toogle Light</button>
            <br />
            <button onClick={() => {
                console.log("button clicked")
                setAge(++age)
            }}>Increase Age</button>
        </div>
    )
}

export default Room
