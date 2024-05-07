import React from 'react'

const BookAutocarForm = () => {
    return (
        <div style={{marginBottom:'30px'}}>
            <form>
                <div class="inputflex">
                    <input type="text" className="form-group form-control forminput" placeholder="FIRST NAME"/>
                    <input type="text" className="form-group form-control forminput" placeholder="LAST NAME"/>
                </div>
                <div class="inputflex">
                    <input type="text" className="form-group form-control forminput" placeholder="EMAIL ADDRESS"/>
                    <input type="text" className="form-group form-control forminput" placeholder="MOBILE PHONE NUMBER"/>
                </div>
                <div class="form-group inputflex">
                    <input type="text" className="form-control forminput" placeholder="SELECT BOX"/>
                </div>
                <div class="form-group inputflex">
                    <input type="text" className="form-control forminput" placeholder="ENTER YOUR LOCATION"/>
                </div>
                <div className='d-flex'>
                    <button type="submit" className="btn btn-primary w-100 submitbutton">send</button>
                </div>
            </form>
        </div>
    )
}

export default BookAutocarForm;