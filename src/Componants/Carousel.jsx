import React from 'react'

export const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide my-4 mx-5"  data-ride="carousel">
  <div className="carousel-inner "style={{ height: "400px" }}>
    <div className="carousel-item active">
      <img className="d-block w-100 h-50" src="/food/platter-2009590_1280.jpg" alt="First slide" style={{ height: "auto" }} />
      <div className="carousel-caption">
        <h2 className="carousel-title">Welcome to Explore Your Taste!</h2>
       
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/food/spaghetti-1932466_1280.jpg" alt="Second slide" style={{ height: "auto" }}/>
      <div className="carousel-caption">
        <h2 className="carousel-title">Welcome to Explore Your Taste!</h2>
        
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/food/pasta-1181189_1280.jpg" alt="Third slide"style={{ height: "auto" }} />
      <div className="carousel-caption">
        <h2 className="carousel-title">Welcome to Explore Your Taste!</h2>
        
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

    </div>
  )
}
