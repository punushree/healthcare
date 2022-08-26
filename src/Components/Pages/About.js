import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className='conianer-fluid hederbg'>
            <div className='row'>
                <div className='container'>
                    <h1>About Us</h1>
                    <span><Link to="/">Home</Link> > About Us</span>
                </div>
            </div>
        </div>

        <div className='container ptb'>
            <div className='row abt'>
                <div className='col-sm-6'>
                    <img src='https://doctery-demo.pbminfotech.com/html-demo/images/img-12.jpg' width="80%"></img>
                </div>
                <div className='col-sm-6 contacttext '>
                    <br></br>
                    <span><b>Visit Our Clinics</b></span>
                    <h1>The great place of medical hospital center.</h1>
                    <br></br>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p><br></br>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <p><i class="fa-solid fa-angles-right"></i> &nbsp;100% Expert Doctors</p>
                            <p><i class="fa-solid fa-angles-right"></i> &nbsp;From Scintific Jornal</p>
                        </div>
                    
                        <div className='col-sm-4'>
                             <p><i class="fa-solid fa-angles-right"></i> &nbsp;100% Expert Doctors</p>
                            <p><i class="fa-solid fa-angles-right"></i> &nbsp;From Scintific Jornal</p>
                        </div>
                        <div className='col-sm-4'>
                             <p><i class="fa-solid fa-angles-right"></i> &nbsp;100% Expert Doctors</p>
                            <p><i class="fa-solid fa-angles-right"></i> &nbsp;From Scintific Jornal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid abtsec ptb'>
            <div className='container text-center'>
                <div className='col-sm-8 centerblock'>
                    <span>Manage your healthcare</span>
                    <h1>Trust us to be there to help all and make things weel again</h1>
                    <br></br>
                    <button className='cutmbutton'>know More</button>
                    <br />
                    <br></br>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='container text-center'>
                <div className='col-sm-8 centerboxhaeding'>
                    <span>Manage your healthcare</span>
                    <h1>Trust us to be there to help all and make things weel again</h1>
                    
                </div>
            </div>
        </div>
<br/>
<br/>
    </div>
  )
}

export default About