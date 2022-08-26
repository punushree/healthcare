import React from 'react'
import Hero from '../HomeSection/Hero'

const Home = () => {
  return (
    <div>
      <Hero />

          <div className='container ptb servicesection'>
          <div class="site-heading text-center">
                        <h2>Why<span> Us</span></h2>
                        <h4>Lorem Ipsum is simply dummy text</h4>
                    </div>
            <div class="row">
              <div class="col-sm-4">
                <p className='text-center'><i class="fa-solid fa-circle-plus"></i></p>
                <h4 className='serviceheading text-center'>ADVANCED TECHNOLOGY</h4>
                <p className='servicetext text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat urna. Nulla nulla diam, adipiscing non ornare non, commodo</p>
              </div>
              <div class="col-sm-4">
                <p className='text-center'><i class="fa-solid fa-user-doctor"></i></p>
                <h4 className='serviceheading text-center'>HEALTHCARE SOLUTIONS</h4>
                <p className='servicetext text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat urna. Nulla nulla diam, adipiscing non ornare non, commodo</p>
              </div>
              <div class="col-sm-4">
                <p className='text-center'><i class="fa-solid fa-truck-medical"></i></p>
                <h4 className='serviceheading text-center'>24/7 AVAILABILITY</h4>
                <p className='servicetext text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat urna. Nulla nulla diam, adipiscing non ornare non, commodo</p>
              </div>
            </div>
          </div>

          <div className='container drtip'>
            <div class="row">
              <div class="col-sm-5 drimg">
                <img src="https://xqn91.mjt.lu/img/xqn91/b/svzu/0qqm4.png"></img>
              </div>
              <div class="col-sm-7">
                {/* <h1 className='mainheading  pb15'>Why Us?</h1><br></br> */}
                <div className='row'>
                  <div className='col-sm-5'>
                    <h4 className='subhed'>How to live a <span>healthy lifestyle?</span></h4><br></br>
                    <p><i className="fa-solid fa-circle-arrow-right" ></i> &nbsp; Lorem ipsum dolor sit amet, consectetur</p>
                    <p><i className="fa-solid fa-circle-arrow-right" ></i> &nbsp; Lorem ipsum dolor sit amet, consectetur</p>
                    <p><i className="fa-solid fa-circle-arrow-right" ></i> &nbsp; Lorem ipsum dolor sit amet, consectetur</p>
                    <p><i className="fa-solid fa-circle-arrow-right" ></i> &nbsp; Lorem ipsum dolor sit amet, consectetur</p>
                    <p><i className="fa-solid fa-circle-arrow-right" ></i> &nbsp; Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <div className='col-sm-7'>
                  <form action="/action_page.php" className='custmform'>
                  <div className="mb-3 mt-3">
                      <label for="name">Name:</label>
                      <input type="text" className="form-control" id="name" placeholder="Enter Your Name" name="name"/>
                    </div>
                    <div className="mb-3 mt-3">
                      <label for="email">Email:</label>
                      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                    </div>
                    <div className="mb-3 mt-3">
                      <label for="phone">Name:</label>
                      <input type="text" className="form-control" id="pnone" placeholder="Enter Your Phone No" name="name"/>
                    </div>
                    <div className="mb-3">
                      <label for="pwd">Password:</label>
                      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                    </div>
                    <div className="form-check mb-3">
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='container-fluid thirdsection'>
              <div className='container ptb'>
                 <div className = "col-sm-6">
                  <div className='box'>
                  <h1 className='mainheading pb15'>Exactly What Facilities We Provided</h1><br></br>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of</p>
                 </div>
                 </div>
                 <div className = "col-sm-6">
                   
                 </div>
              </div>
          </div>
        <div id="servicsect">
          <section class="we-offer-area text-center bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="site-heading text-center">
                        <h2>What we <span>Offer</span></h2>
                        <h4>Lorem Ipsum is simply dummy text</h4>
                    </div>
                </div>
            </div>
                <div class="row our-offer-items less-carousel">
                   
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <i class="fa-solid fa-x-ray"></i>
                            <h4>Cardiology</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                        <i class="fa-solid fa-tooth"></i>
                            <h4>Dental</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                        <i class="fa-solid fa-brain"></i>
                            <h4>Neurologist</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                   
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                        <i class="fa-solid fa-person-pregnant"></i>
                            <h4>Prenatal Care</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                        <i class="fa-solid fa-eye"></i>
                            <h4>Eye Care</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                   
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                        <i class="fa-solid fa-hands-holding-child"></i>
                            <h4>Pediatrician Clinic</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                    
                </div>
        </div>
    </section>
    </div>



    </div>
  )
}

export default Home