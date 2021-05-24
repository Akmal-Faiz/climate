import React, { useState } from 'react'
import './Carousel.css'
import Card from './Card.js'

function Carousel(props) {
  const [cardIndex, setCardIndex] = useState(0)
  
  const  mod = (n, m) => {
    return ((n % m) + m) % m;
  }

  const goBackward = ()=>{
    setCardIndex(mod((cardIndex - 1),props.data.length));
  }

  const goForward = ()=>{
    setCardIndex(mod((cardIndex + 1),props.data.length));
  }
  
  return (
    <div className="carousel">
      
      <div onClick={goBackward}>&lt;</div>
      {
        props.data.map((item, index)=><Card
          title = {item.title}
          text = {item.text}
          disp = {(index == cardIndex) ? "show" : "hide"}
        />)
      }
      <div onClick={goForward}>&gt;</div>
    </div>
    )
}

export default Carousel
