import React from 'react'


function Hero() {
  return (
    <div>
      <React.Fragment>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://xqn91.mjt.lu/img/xqn91/b/svzu/0qql1.jpeg " class="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Lorem Ipsum is dummy text</h5>
            <br></br>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://xqn91.mjt.lu/img/xqn91/b/svzu/0qqlm.jpeg" class="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
          <h5>Lorem Ipsum is dummy text</h5>
            <br></br>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://xqn91.mjt.lu/img/xqn91/b/svzu/0qql2.jpeg" class="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
          <h5>Lorem Ipsum is dummy text</h5>
            <br></br>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </React.Fragment>
    </div>
  )
}

export default Hero