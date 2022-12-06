import React from "react";
import Navbar from "./Navbar";
import logo from "../images/MyJobs@2x.png";
import image from "../images/Screenshot 2020-09-21 at 2.06.52 PM@2x.png";
import brands from "../brands.json";

function Homepage() {
  return (
    <>
      <div className="homepage">
        <div className="banner">
          <Navbar></Navbar>
          <div className="welcome">
            <p>Welcome to</p>
            <img src={logo} alt="MyJob" />
          </div>
          <button className="get-started">Get Started</button>
          <img src={image} alt="img" />
        </div>
        <div className="why-us">
          <p className="why-us-text">Why Us</p>
          <ul>
            <li>
              <h1>Get more visibility</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                molestias.
              </p>
            </li>
            <li>
              <h1>Organize Your Candidates</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
                porro natus! Placeat molestias autem delectus?
              </p>
            </li>
            <li>
              <h1>Veriify Their Abilitis</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                dicta quas voluptas.
              </p>
            </li>
          </ul>
        </div>
        <div className="companies">
          <p>Companies Who Trust Us</p>
          <div className="brands">
            {brands.map((brand) => (
              <div key={brand.id}>
                <img src={brand.image} alt="brand" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
