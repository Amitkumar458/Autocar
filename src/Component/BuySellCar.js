import React from 'react'
import CarCard from './Cards/CarCard';

const BuySellCar = () => {
  return (
    <div className='buysellcarmain' style={{backgroundImage: "url('/images/buysellbackground.png')"}}>
        <div>.</div>
        <div style={{marginTop:'80px'}}>
            <div className='buysellcar'>
                <CarCard name={'Buy Car'}/>
                <CarCard name={'Sell Car'}/>
            </div>
        </div>
        <div className='buysellcarimage'>
            <img  src='/images/buysellcar.png' alt='loading' height={'200px'} width={'400px'}/>
        </div>
    </div>
  )
}

export default BuySellCar;