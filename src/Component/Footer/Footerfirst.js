import React from 'react'
import SearchBox from '../Common/SearchBox';

const Footerfirst = () => {
  return (
    <div className='footerfirst' style={{backgroundImage:'url(/images/footerBackImg.png)', paddingTop:'20px' , paddingBottom:'20px'}}>
        <div className='footercom1'>
          <img src='/images/autocarlogo.png' height={'45px'} width={'245px'} alt='loading'/>
          <div style={{opacity:'0.7'}}>Felis ad faucibus magna netus dictum augue velit</div>
          <SearchBox/>
        </div>
        <div className='footercom2'>
          <div className='d-flex flex-column align-items-center justify-content-center'>
              <span className='selectTypeHead1'>
                  <span className='selectTypeText'>
                      vehicles
                  </span>
              </span>
          </div>
          <div className='footercom3'>
            <div>SUVs</div>
            <div>Trucks</div>
            <div>Crossovers</div>
            <div>Hybrids</div>
            <div>Electrified Vehicles</div>
          </div>
        </div>
        <div className='footercom2'>
          <div className='d-flex flex-column align-items-center justify-content-center'>
              <span className='selectTypeHead1'>
                  <span className='selectTypeText'>
                    Helpful Links
                  </span>
              </span>
          </div>
          <div className='footercom3'>
            <div>Autocar Care</div>
            <div>Financial Services</div>
            <div>Connected Services</div>
            <div>Mobility Feature</div>
            <div>Car Tips & Advice</div>
          </div>
        </div>
        <div className='footercom2'>
          <div className='d-flex flex-column align-items-center justify-content-center'>
              <span className='selectTypeHead1'>
                  <span className='selectTypeText'>
                    About Autocar
                  </span>
              </span>
          </div>
          <div className='footercom3'>
            <div>Careers</div>
            <div>Our Company</div>
            <div>Merchandise</div>
            <div>Auto Show</div>
            <div>Plant Tours</div>
          </div>
        </div>
        <div className='footercom2'>
          <div className='d-flex flex-column align-items-center justify-content-center'>
              <span className='selectTypeHead1'>
                  <span className='selectTypeText'>
                    Help
                  </span>
              </span>
          </div>
          <div className='footercom3'>
            <div>Contact Us</div>
            <div>Accessibility</div>
            <div>FAQs</div>
            <div>Privacy Policy</div>
            <div>Legal Disclaimer</div>
          </div>
        </div>
    </div>
  )
}

export default Footerfirst;