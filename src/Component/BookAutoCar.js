import React from 'react'
import BookAutocarForm from './Forms/BookAutocarForm';

const BookAutoCar = () => {
    return (
        <div className='bookautocar' style={{ backgroundImage: 'url(/images/BookAutocar.jpg)' }}>
            <div className='bookautocar2'>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <span className='selectTypeHead'>
                        <span className='selectTypeText' style={{fontSize:'23px'}}>
                            Book now at autocar
                        </span>
                    </span>
                </div>
                <BookAutocarForm/>
            </div>
        </div>
    )
}

export default BookAutoCar;