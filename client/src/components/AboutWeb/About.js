import React from "react";
import Footer from "../Footer";
import "./About.css";
import TestimonialB from "../TestimonialB/TestimonialB";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="illus">
          <img src="/assets/illus1.png" alt="" />
        </div>
        <div id="home-text">
          <h2>About BLYND</h2>
          <p>
            BLYND is the dating website that's designed to help you make real
            connections in person. Our platform is safe, user-friendly, and
            accessible to everyone, including visually impaired users. <br />
            <br/>
            We believe that sometimes the best connections happen when you take
            a chance and try something new. So why not try a blind date with
            BLYND?
          </p>
        </div>
      </div>
      <hr className="line1" />
      <div id="features">
        <div className="illus">
          <img src="/assets/illus2.svg" alt="" />
        </div>
        <div id="home-text">
          <h2>Our Features</h2>
          <p>
            BLYND offers a unique approach to dating that's all about taking
            chances and embracing the unknown. Our platform includes features
            such as profile verification, secure messaging, and the ability to
            set up blind dates with other users in your area.
          </p>
        </div>
        <hr />
      </div>
      <hr className="line2" />
      <div id="about">
        <div className="illus">
          <img src="/assets/illus3.svg" alt="" />
        </div>
        <div id="home-text">
          <h2>How it Works</h2>
          <p>
            BLYND is simple to use. After signing up, you can create a profile,
            browse other users, and suggest a blind date. If the other user
            accepts, you'll be connected to plan your date. It's that easy!
          </p>
        </div>
      </div>
      <hr className="line1" />

      <div id="about-t">
        <h2>What our users say</h2>
        <p>
          Our users love BLYND because it's a refreshing change from traditional
          online dating. Check out what some of our users have to say about
          their blind dating experiences on BLYND.
        </p>

        <TestimonialB />

        {/* </div> */}
      </div>

      <Footer />
    </>
  );
};

export default About;
