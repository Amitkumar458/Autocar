import React from 'react'
import CarBlogCard from './Cards/CarBlogCard';

const HelpfulCarBuying = () => {
    const blogdata = [
        {
            img:'car1.jpg',
            title:'Is Now the Time to Buy Out Your Car Lease?'
        },
        {
            img:'car2.jpg',
            title:'Which New Cars Have Manual Transmissions?'
        },
        {
            img:'car3.jpg',
            title:'Life with the Toyota RAV4: What Do Owners Really Think?'
        },
        {
            img:'car4.jpg',
            title:'Which Cars Have Autopilot?'
        },
        {
            img:'car5.jpg',
            title:'What Not to Do When Towing: Don’t Swerve for Debris'
        },
        {
            img:'car6.jpg',
            title:'How Do Car Seats Fit in a 2021 Land Rover Defender?'
        },
    ]
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <div className='vlogHead text-center'> - FROM OUR BLOG -</div>
            <span className='selectTypeHead'>
                <span className='selectTypeText'>
                    Helpful Car Buying
                </span>
            </span>
            <div className='d-flex flex-wrap justify-content-center'>
                {blogdata.map((data , i) => {
                    return <CarBlogCard key={i} title={data.title} image={data.img}/>
                })}
            </div>
        </div>
    )
}

export default HelpfulCarBuying;