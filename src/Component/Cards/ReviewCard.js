import { Avatar } from '@mui/material';
import React from 'react'

const ReviewCard = ({title , name , role , image}) => {
  return (
    <div className='reviewbackimg' style={{backgroundImage: "url('/images/review.png')"}}>
        <div style={{width:'70%' , marginLeft:'30px' , opacity:'0.8'}}>
            {title}
        </div>
        <div className='d-flex align-items-center justify-content-center mt-3'>
            <Avatar alt="Remy Sharp" src={`/images/${image}`} sx={{ width: 56, height: 56 }}/>
            <div className='mx-4'>
                <div className='text-danger' style={{fontSize:'20px', fontWeight:'500'}}>{name}</div>
                <div>{role}</div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard;