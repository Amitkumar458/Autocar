import React from 'react'
import ReviewCard from './Cards/ReviewCard';

const RecentReview = () => {
    const reviewData = [
        {
            title:'Sodes primis aenean semper suspendisse venenatis montes etiam hendrerit ultrices sectus',
            name:'Ronadl Ridfo',
            role:'Teacher',
            image:'reviewimg1.jpg'
        },
        {
            title:'Sodes primis aenean semper suspendisse venenatis montes etiam hendrerit ultrices sectus',
            name:'Jesika Jons',
            role:'Freelancer',
            image:'reviewimg2.jpg'
        },
        {
            title:'Sodes primis aenean semper suspendisse venenatis montes etiam hendrerit ultrices sectus',
            name:'Rionaldo',
            role:'CEO',
            image:'reviewimg3.jpg'
        },
    ]
    return (
        <>
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <span className='selectTypeHead'>
                <span className='selectTypeText'>
                    Recent reviews
                </span>
            </span>
        </div>
        <div className='d-flex flex-wrap align-items-center justify-content-center m-4'>
            {reviewData.map((data , i) => {
                return <ReviewCard key={i} title={data.title} name={data.name} role={data.role} image={data.image}/>
            })}
        </div>
        <br/>
        </>
    )
}

export default RecentReview;