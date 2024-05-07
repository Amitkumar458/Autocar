import React from 'react'

const CarBlogCard = ({title , image}) => {
  return (
    <div className='text-center carBlogCard'>
        <img src={`/images/${image}`} alt='loading...' className='carBlogImg'/>
        <div style={{fontSize:'20px', margin:'5px', fontWeight:'600' , letterSpacing:'2px'}}>{title}</div>
        <p>July 23, 2021  No Comments</p>
    </div>
  )
}

export default CarBlogCard;