import React from 'react'
import WhyChooseCard from './Cards/WhyChooseCard';

const WhyChooseUs = () => {
    return (
        <>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <span className='selectTypeHead'>
                    <span className='selectTypeText'>
                        WHY CHOOSE US
                    </span>
                </span>
            </div>
            <div className='d-flex m-2 justify-content-around flex-wrap'>
                <WhyChooseCard image={'reason1.png'} text={'Finantial Solution'}/>
                <WhyChooseCard image={'reason2.png'} text={'Car Service'}/>
                <WhyChooseCard image={'reason3.png'} text={'PriceList'}/>
                <WhyChooseCard image={'reason4.png'} text={'Trueted'}/>
            </div>
            <br/>
        </>
    )
}

export default WhyChooseUs;