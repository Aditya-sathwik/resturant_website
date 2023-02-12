import React from 'react'

function Productbox(props) {
  return (
   <div className="a-box">
    <div className="a-b-image">
        <img src={props.image} alt='' />
    </div>
    <div className="a-b-text">
        <h2>{props.title}</h2>
        <button className='productbox-button'>Order Now for free</button>
    </div>
   </div>
  )
}

export default Productbox
