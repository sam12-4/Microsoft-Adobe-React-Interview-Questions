import React, { useEffect } from 'react'
import "./random.css"
import { useState } from 'react'
const RandomColor = () => {
  const [color, setColor] = useState("#fffff")
  const [mode, setMode] = useState("none")

  const setRandomHex = () =>{
    let hex = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,0 , "A", "B", "C", "D", "E", "F"]
    return hex[Math.floor(Math.random()*hex.length)]
  }

  const generateRandomColor = () => {
    if (mode=="Hex") {
      let randomHex = "#"
      for (let i = 0; i <6; i++) {
        randomHex += setRandomHex()
      }
      console.log(randomHex);
      setColor(randomHex)
      // setColor(`#${Math.random().toString(16).substr(-6)}`)
    }
    else if (mode =="Rgb") setColor(`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`)
  }

  useEffect(() => {
    console.log(color);
  }, [color])
  return <>
    <div className="container">
      <h1>Random Color Generator</h1>
      <div className="color">
        <h2>Current Color : {color}</h2>
        <h2>Current Mode : {mode}</h2>
        <div className='flex'>
        <button className="btn" onClick={generateRandomColor}>Click Me to generate random color</button>
        <button className="btn" onClick={()=>{setMode("Rgb")}}>Set Mode : RGB</button>
        <button className="btn" onClick={()=>{setMode("Hex")}}>Set Mode : HEX</button>
        </div>
        <div className="container" style={{backgroundColor:`${color}`, height:"50vh"}}> Color Container</div>
      </div>
    </div>
  </>
}

export default RandomColor
