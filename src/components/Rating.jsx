import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = ({stars=5}) => {
    const [rating, setRating] = useState(-1)
    const [hover, setHover] = useState(-1)

    useEffect(() => {
      console.log(rating);
    }, [rating])
    
    const handleClick = (index) => {
      setRating(index)
      setHover(index)
    }

  return (
    <div>
        {[...Array(stars)].map((_,index)=>{
           return <FaStar 
            key={index}
            style = {{marginRight:"5px", cursor:"pointer"}}
            color= {index<=(hover||rating)?"yellow":"grey"}
            onClick={()=>{hover == rating ? handleClick(-1): setRating(index)}}
            onMouseEnter={()=>{index==0 ? setHover(0) : setHover(index)}}
            onMouseLeave={()=>{setHover(rating)}}
           />
        })}
    </div>
  )
}

export default Rating
