import React from 'react'
import Navbar from './Navbar';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const TopNavMain = () => {
  var items = [
    {
      name: "NEW MERCEDES-BENZ",
      image: "maincar1.png",
      title: 'new take on SEDAN'
    },
    {
      name: "NEW JEEP VEHICLES",
      image: "maincar2.png",
      title: 'new take on SUV'
    }
  ]
  return (
    <div style={{ backgroundImage: 'url(/images/footerBackImg.png)', minHeight: '400px' }}>
      <Navbar />
      <Carousel stopAutoPlayOnHover={false}>
        {
          items.map((item, i) => <Item key={i} item={item} />)
        }
      </Carousel>
    </div>
  )
}

function Item(props) {
  return (
    <Paper  sx={{
      backgroundImage: `url(/images/${props.item.image})` , backgroundColor: '#343538'}} className='headingimg'>
      <div style={{ margin: '10px', letterSpacing: '3px', marginRight: '50%' }}>
        <h3 style={{ color: 'white' }}>{props.item.title}</h3>
        <h2 className='heading1'>{props.item.name}</h2>
      </div>
    </Paper>
  )
}



export default TopNavMain;