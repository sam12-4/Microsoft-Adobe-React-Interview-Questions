//  js interview is going in co pilot remain silent for 5 minutes

import { useState } from 'react'
import '../App.css'
import data from '../assets/data'
import React from 'react'

const Accordian = () => {const [selected, setSelected] = useState(null)
    const [multipleApproach, setMultipleApproach] = useState(false)
    const [selectedMultipleid, setSelectedMultipleid] = useState([])
  
    const handleSingleFunction = (id) => {
      // setSelected(id==selected?null:id)
      setSelected(id==selected?null:id)
      // setSelectedMultipleid([])
    }
  
    const handleMultipleFunction = (id) => {
      setSelected(null)
      let multiCopies =[...selectedMultipleid]
      if (multiCopies.includes(id)) {
        multiCopies = multiCopies.filter((item)=>item!==id)
      }
      else{
        multiCopies.push(id)
      }
      setSelectedMultipleid(multiCopies)
    }
    return (
      <>
      <button onClick={()=>{setMultipleApproach(!multipleApproach); setSelectedMultipleid([])}}>Enable multipleApproach</button>
        {data && data.map((item, index)=>{
          return <div key={index} className="accordian">
          <div className="question" onClick={multipleApproach?()=>{handleMultipleFunction(item.id)}:()=>handleSingleFunction(item.id)}>
              {item.question}
              <span> + </span>
          </div>
          
         {multipleApproach===true ? selectedMultipleid.includes(item.id) && <div className="answer">
            {item.answer}
          </div>  :  selected==item.id && <div className="answer">
            {item.answer}
          </div> }
        </div>
        })
      }
      </>
    )
}

export default Accordian
