import React from 'react'

const WhyChooseCard = ({image , text}) => {
  return (
    <div className='whychoosecard text-center'>
        <img src={`/images/${image}`} alt='loading' className='whyusimg'/>
        <div style={{fontFamily:'monospace' , fontSize:'20px', color:'#c30303'}}>{text}</div>
        <div style={{fontFamily:'sans-serif' , opacity:'0.6'}}>Torquent suspendisse sociosqu eu enim ridiculus</div>
    </div>
  )
}

export default WhyChooseCard;