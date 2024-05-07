import { Button } from '@mui/material';
import React from 'react'

const BannerInfo = () => {
  return (
    <div className='BannerInfo text-white'>
      <div style={{display:'flex' , flexDirection:'column', gap:'20px'}}>
        <div style={{fontFamily:'sans-serif' , fontSize:'40px'}}>Start Today. Drive Today.</div>
        <div style={{maxWidth:'250px' , fontSize:'20px'}}>Praesent porttitor penatibus ornare</div>
        <Button variant='contained' size='large' sx={{backgroundColor:'black'}}>Get Started</Button>
      </div>
      <img src='/images/bannerCar.png' alt='loading' className='bannerImg'/>
    </div>
  )
}

export default BannerInfo;