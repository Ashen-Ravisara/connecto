import React from 'react'
import './Home.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';

function Home() {
  return (
    <div>
        <h1 className='h1Text'>Save 50% for 12 months</h1>
        <p className='main'>Simple, transparent pricing</p>
        <p className='pText'>No hidden or surprise fees.</p>


        <div className='row pt-5 pb-5'>

            <div className='col-1'></div>

            {/* First Card */}
            <div className='col-xl-3 m-3 cardItem' data-aos="fade-right" style={{backgroundColor: '#ffffff'}}>
                <h3>Lite</h3>
                <div>
                    <p className='main' style={{ display: 'inline-block', margin: '0' }}><b>19 $</b></p>
                    <p style={{ display: 'inline-block', margin: '0', fontSize: '24px' }}> / month</p>
                </div> 
                <p style={{fontSize: '18px'}}>For small and medium scale businesses</p>
                
                <li className='mb-3'><CheckCircleIcon style={{ marginRight: '8px' }} />20 users</li>
                <li className='mb-3'><CheckCircleIcon style={{ marginRight: '8px' }}/>200 transactions</li>
                <li className='mb-3'><CheckCircleIcon style={{ marginRight: '8px' }}/>100MB Storage</li>
                <li className='mb-3'><CheckCircleIcon style={{ marginRight: '8px' }}/>API Access</li>
                <li className='mb-3'><CheckCircleIcon style={{ marginRight: '8px' }}/>Email Support</li>
                
                <div className='buttonCenter d-grid gap-2 px-4 pt-3'>
                    <Button variant="contained" size="large" style={{backgroundColor: '#020202', color: '#ffffff'}}>Buy Now</Button>
                </div>
            </div>


            {/* second Card */}
            <div className='col-xl-3 m-3 cardItem' data-aos="fade-right" data-aos-delay="200" style={{backgroundColor: '#020202', color: '#ffffff'}} >
                <h3>Premium</h3>
                <div>
                    <p className='main' style={{ display: 'inline-block', margin: '0' }}><b>199 $</b></p>
                    <p style={{ display: 'inline-block', margin: '0', fontSize: '24px' }}> / month</p>
                </div>

                <p style={{fontSize: '18px'}}>For large scale enterprises and businesses</p>

                <li className='mb-3'><CheckCircleIcon style={{ marginRight: '8px' }}/>20 users</li>
                <li className='mb-3'><CheckCircleIcon style={{ marginRight: '8px' }}/>200 transactions</li>
                <li className='mb-3'><CheckCircleIcon style={{ marginRight: '8px' }}/>100MB Storage</li>
                <li className='mb-3'><CheckCircleIcon style={{ marginRight: '8px' }}/>API Access</li>
                <li className='mb-3'><CheckCircleIcon style={{ marginRight: '8px' }}/>Email Support</li>
                
                <div className='buttonCenter d-grid gap-2 px-4 pt-3'>
                    <Button variant="contained" size="large" style={{backgroundColor: '#ffffff', color: '#020202'}}>Buy Now</Button>
                </div>
            </div>


            {/* Image */}
            <div className='col-xl-4 m-3' data-aos="fade-right" data-aos-delay="400" style={{textAlign: 'left'}}>
                <img src='/images/image.svg' alt='man and computer' className='img-fluid' />
                <p className='pt-4' style={{color: '#ffffff', fontSize: '18px'}}>Need a custom pricing package, unique for your business?</p>

                <div className='pt-3'>
                    <Button variant="contained" size="large" style={{backgroundColor: '#ffffff', color: '#020202'}}>Contact Sales</Button>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Home