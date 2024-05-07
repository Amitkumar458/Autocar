import { Button } from '@mui/material';
import React from 'react'

const CarCard = ({name}) => {
  return (
    <div className='carcard'>
        <h3>
            {name}
        </h3>
        <div className='text-center' style={{padding:'20px'}}>Feugiat platea pellentesque commodo justo rutrum tincidunt. Mattis rhoncus</div>
        <Button variant="contained" style={{backgroundColor:'red'}}>Read More</Button>
    </div>
  )
}

export default CarCard;