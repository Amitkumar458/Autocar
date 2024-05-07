import React from 'react'
import ExploreVehicelCard from './Cards/ExploreVehicleCard'

const ExploreVehicle = () => {
    const data = [
        {
            image:'ecar1.jpg',
            title:'LUXURY CAR',
            name:'CAMRY HYBRID',
            price:'2500$',
            company:'TOYOTA',
            type:'Automatic',
        },
        {
            image:'ecar2.jpg',
            title:'CONVERTIBLE',
            name:'MAZDA MX-5',
            price:'2500$',
            company:'MAZDA',
            type:'Manual',
        },
        {
            image:'ecar3.jpg',
            title:'SEDAN',
            name:'TOYOTA C-HR',
            price:'2500$',
            company:'TOYOTA',
            type:'Automatic',
        },
        {
            image:'ecar4.jpg',
            title:'LUXURY CAR',
            name:'PORSCHE 911',
            price:'2500$',
            company:'TOYOTA',
            type:'Automatic',
        },
        {
            image:'ecar5.jpg',
            title:'LUXURY CAR',
            name:'INNOVA',
            price:'2500$',
            company:'TOYOTA',
            type:'Automatic',
        },
        {
            image:'ecar6.jpg',
            title:'LUXURY CAR',
            name:'SIENNA',
            price:'2500$',
            company:'TOYOTA',
            type:'Manual',
        },
        {
            image:'ecar7.jpg',
            title:'LUXURY CAR',
            name:'HONDA CIVIC',
            price:'2500$',
            company:'HONDA',
            type:'Automatic',
        },
        {
            image:'ecar8.jpg',
            title:'LUXURY CAR',
            name:'AUDI RS 5',
            price:'2500$',
            company:'AUDI',
            type:'Automatic',
        },
    ]
  return (
    <div style={{display:'flex' , justifyContent:'space-around' , flexWrap:'wrap'}}>
        {
            data.map((e , i) => {
                return <ExploreVehicelCard data={e} key={i}/>
            })
        }
    </div>
  )
}

export default ExploreVehicle;