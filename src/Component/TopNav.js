import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddAlertIcon from '@mui/icons-material/AddAlert';

const TopNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
            <div className="navbar-brand" href="/">
                <FacebookIcon className='mx-1' sx={{fontSize:'medium'}} />
                <AddLocationAltIcon className='mx-1' sx={{fontSize:'medium'}} />
                <AccountCircleIcon className='mx-1' sx={{fontSize:'medium'}} />
                <AddAlertIcon className='mx-1' sx={{fontSize:'medium'}} />
            </div>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav navbar-dark bg-dark mr-auto">
                </ul>
                <span class="navbar-text text-light">
                    <div className='d-flex'>
                        <div className='d-flex mx-3'>
                            <CallIcon/>
                            <div className='mx-1'>+6208740040</div>
                        </div>
                        <div className='d-flex mx-3'>
                            <EmailOutlinedIcon/>
                            <div className='mx-1'>autocar@mail.com</div>
                        </div>
                        <div className='d-flex mx-3'>
                            <PlaceOutlinedIcon/>
                            <div className='mx-1'>Jl. Soekarno-hatta</div>
                        </div>
                    </div>
                </span>
            </div>
        </nav>
    )
}

export default TopNav;