import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';

const QyeryBanner = () => {
    return (
        <div className='d-flex align-items-center justify-content-center flex-wrap' style={{ backgroundColor: 'rgb(210, 0, 0)', color: 'white', minHeight: '120px' , gap:'30px' , padding:'20px' }}>
            <div className='text-center' style={{ fontSize: '25px' , fontFamily:'monospace' }}>HAVE A QUESTIONS? FEEL FREE TO ASK</div>
            <div className='d-flex mx-3'>
                <AddIcCallRoundedIcon />
                <div className='mx-3 h5'>+6208740040</div>
            </div>
            <div className="navbar-brand" href="/">
                <FacebookIcon className='mx-1' sx={{fontSize:'large'}} />
                <CottageOutlinedIcon className='mx-1' sx={{fontSize:'large'}} />
                <FacebookIcon className='mx-1' sx={{fontSize:'large'}} />
                <CottageOutlinedIcon className='mx-1' sx={{fontSize:'large'}} />
            </div>
        </div>
    )
}

export default QyeryBanner;