import React from 'react'

import "./Footer.css"
function Footer() {
  return (
    <>
<footer class="footer-section">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget company-intro-widget">
              <a href="index.html" class="site-logo"><img className="footerlogo" src= "https://xqn91.mjt.lu/img/xqn91/b/s848/0qv4j.png" alt="" width="100" /></a>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
              <ul class="company-footer-contact-list">
                <li><i class="fas fa-phone"></i>0123456789</li>
                <li><i class="fas fa-clock"></i>Mon - Sat 8.00 - 18.00</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget course-links-widget">
              <h5 class="widget-title">Our Best Services</h5>
              <ul class="courses-link-list">
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Cardiology</a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Dental</a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Neurologist</a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Pediatric</a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Pulmonary</a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Traumatology</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget latest-news-widget">
              <h5 class="widget-title">lastest news</h5>
              <ul class="small-post-list">
                <li>
                  <div class="small-post-item">
                    <a href="#" class="post-date">July 18, 2018</a>
                    <h6 class="small-post-title"><a href="#">Lorem Ipsum is simply dummy text of the printing.</a></h6>
                  </div>
                </li>
                <li>
                  <div class="small-post-item">
                    <a href="#" class="post-date">July 28, 2018</a>
                    <h6 class="small-post-title"><a href="#">Lorem Ipsum is simply dummy text of the printing</a></h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget newsletter-widget">
              <h5 class="widget-title">Newsletter</h5>
              <div class="footer-newsletter">
                <p>Sign Up to Our Newsletter to Get Latest Updates & Services</p>
                <form class="news-letter-form">
                  <input type="email" name="news-email" id="news-email" placeholder="Your email address" />
                  <input type="submit" value="Send" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-6 text-sm-left text-center">
              <span class="copy-right-text">© 2022 <a href="#">loremipsum</a> All Rights Reserved.</span>
            </div>
            <div class="col-md-6 col-sm-6">
              <ul class="terms-privacy d-flex justify-content-sm-end justify-content-center">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </footer>

    </>
  )
}

export default Footer