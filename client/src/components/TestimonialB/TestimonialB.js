import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './TestimonialB.css'

export default class TestimonialB extends Component {
  render() {
    return (<>
        
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/assets/man.png" alt="" />
          <div className="myCarousel">
            <h3>Hannah Schmitt</h3>
            <h4>User</h4>
            <p className="testi-p">
            I was skeptical about blind dating at first, but Connect in Real Life made it so easy and fun. I've met some amazing people and even found a romantic connection.</p>
          </div>
        </div>

        <div>
          <img src="/assets/woman.png" alt="" />
          <div className="myCarousel">
            <h3>Bhumika</h3>
            <h4>Client</h4>
            <p className="testi-p">
            I was skeptical about blind dating at first, but Connect in Real Life made it so easy and fun. I've met some amazing people and even found a romantic connection.</p>
          </div>
        </div>

        <div>
          <img src="/assets/man.png" alt="" />
          <div className="myCarousel">
            <h3>Syeda</h3>
            <h4>Client</h4>
            <p className="testi-p">
            I was skeptical about blind dating at first, but Connect in Real Life made it so easy and fun. I've met some amazing people and even found a romantic connection.</p>
          </div>
        </div>

      </Carousel>
      </>
    );
  }
}