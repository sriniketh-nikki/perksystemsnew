import React, { useState, useEffect } from "react";
import pic from "./back2.jpg";
import pic1 from "./shakehand.jpg";
import pic2 from "./computer.jpg";

const images = [pic, pic1, pic2];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Update the image index every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="home-section">
        <div className="sect">
          <img
            id="slide-bg"
            src={images[currentImageIndex]}
            alt={`Laptop ${currentImageIndex + 1}`}
          />
          <h1 id="head1">Welcome to</h1>
          <h2 id="head2">PERK SYSTEMS INC</h2>
        </div>
      </section>
      <footer className="home-footer">
        <div>
          <h4>
            <i class="bi bi-lightbulb-fill"></i> IT Services
          </h4>
          <p>
            Our focus is on meeting your technology needs. We offer a spectrum
            of dervices that are appropriate to your requirements.. &nbsp;
            <span>
              <a href="##">Read More..</a>
            </span>
          </p>
        </div>
        <div>
          <h4>
            <i class="bi bi-briefcase-fill"></i> Custom Consulting Services
          </h4>
          <p>
            Our focus is on meeting your technology needs. We offer a spectrum
            of dervices that are appropriate to your requirements.. &nbsp;
            <span>
              <a href="##">Read More..</a>
            </span>
          </p>
        </div>
        <div>
          <h4>
            <i class="bi bi-trophy"></i> Training
          </h4>
          <p>
            Our focus is on meeting your technology needs. We offer a spectrum
            of dervices that are appropriate to your requirements.. &nbsp;
            <span>
              <a href="##">Read More..</a>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
