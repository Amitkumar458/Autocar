import React from 'react'
import WhyChooseCard from './Cards/WhyChooseCard';

const HelpCenter = () => {
    return (
        <div className='helpcenter' style={{ marginBottom: '100px' }}>
            <div className='helpcenterimg'>
                <img src='/images/helpcenterimg.jpg' alt='loading' className='helpimg'/>
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <div className='d-flex flex-column align-items-center'>
                    <span className='selectTypeHead'>
                        <span className='selectTypeText' style={{fontSize:'20px'}}>
                            Help Center
                        </span>
                    </span>
                </div>
                <div style={{marginBottom:'30px' , marginLeft:'30px' , width:'80%', fontFamily:'monospace'}}>
                    Mattis vitae augue suspendisse  facilisis phasellus lobortis parturient.
                </div>
                <div className='d-flex m-2 justify-content-around flex-wrap'>
                    <WhyChooseCard image={'helpus1.png'} text="Auto Loan Calculators"/>
                    <WhyChooseCard image={'helpus2.png'} text="Auto Loan Calculators"/>
                </div>
            </div>
        </div>
    )
}

export default HelpCenter;