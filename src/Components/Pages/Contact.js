import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <div className='conianer-fluid hederbg'>
                <div className='row'>
                    <div className='container'>
                        <h1>Contact Us</h1>
                        <span><Link to="/">Home</Link> > Contact</span>
                    </div>
                </div>
            </div>

            <div className='container ptb text-center contacttext'>
                <span><b>Get In Touch</b></span>
                <h1>Call now or write a message</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className='Contactinfo'>
                <div className='container'>
                    <div className='row infobox'>
                        <div className='col-sm-4 text-center rightline'>
                            <p><i class="fa-solid fa-map-location"></i></p>
                            <h4>Our Location​​</h4>
                            <p>456, Lorem Street,New York,<br></br>
                                33454, NY.</p>
                        </div>
                        <div className='col-sm-4 text-center rightline'>
                            <p><i class="fa-solid fa-phone"></i></p>
                            <h4>Phone Number​​</h4>
                            <p>Emergency Cases<br></br>
                                +1 (088) 456 888 (24/7)</p>
                        </div>
                        <div className='col-sm-4 text-center'>
                            <p><i class="fa-solid fa-envelope"></i></p>
                            <h4>Email Address​​</h4>
                            <p>contact@example.com,<br></br>
                                admin@example.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='formsect'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-8'>
                            <span><b>Get In Touch</b></span>
                            <h1>Call now or write a message</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><br></br>
                            <form action="/action_page.php">
                                <div className='row'>
                                    <div className='col-sm-6'>

                                        <input type="text" class="form-control" id="fname" placeholder="First Name" name="fname" />
                                        <br />

                                        <input type="email" class="form-control" id="email" placeholder="Email" name="email" />
                                    </div>
                                    <div className='col-sm-6'>
                                        <input type="text" class="form-control" id="lname" placeholder="Last Name" name="lname" />

                                        <br />

                                        <input type="text" class="form-control" id="no" placeholder="Phone No" name="phone no" />
                                    </div>

                                </div>
                                <br />
                                <div className='col-sm-12'>
                                    <textarea class="form-control" rows="5" id="comment" name="text" placeholder="Message" ></textarea>
                                    <br />

                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>

                            </form>
                        </div>
                        <div className='col-sm-4'>
                            <div className='shedulehr'>
                                <h1 className='text-center'>Schedule Hours</h1>
                                <br></br><br></br>
                                <div className='row'>
                                    <div className='col-sm-5'>
                                        <p>Monday</p>
                                    </div>
                                    <div className='col-sm-7 text-right'>
                                        <p>09:00 am - 19:00 pm</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-5'>
                                        <p>Tuesday</p>
                                    </div>
                                    <div className='col-sm-7 text-right'>
                                        <p>09:00 am - 19:00 pm</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-5'>
                                        <p>Wednesday</p>
                                    </div>
                                    <div className='col-sm-7 text-right'>
                                        <p>09:00 am - 19:00 pm</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-5'>
                                        <p>Thursday</p>
                                    </div>
                                    <div className='col-sm-7 text-right'>
                                        <p>09:00 am - 19:00 pm</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-5'>
                                        <p>Friday</p>
                                    </div>
                                    <div className='col-sm-7 text-right'>
                                        <p>09:00 am - 19:00 pm</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-5'>
                                        <p>Saturday</p>
                                    </div>
                                    <div className='col-sm-7 text-right'>
                                        <p>09:00 am - 19:00 pm</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-5'>
                                        <p>Sunday</p>
                                    </div>
                                    <div className='col-sm-7 text-right'>
                                        <p>Closed </p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <img src="https://assets.website-files.com/5e832e12eb7ca02ee9064d42/5f7db426b676b95755fb2844_Group%20805.jpg" width="100%" />
            </div>



        </div>
    )
}

export default Contact