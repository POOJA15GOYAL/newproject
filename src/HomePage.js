import React from 'react';
import { Link } from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./navbar.js";
import Marquee1 from "./marquee.js";

import Images from "./carousel.js";
import Marquee2 from "./marquee2.js";

import Highlights from "./highlights.js";
import Aboutus from "./aboutus.js";

import Axisoflearning from "./axisoflearning";
import Vision from "./vision.js";
import Slides from "./messages1.js";
import Bootstrap from "./bootstrap.js";
import Box from "./box.js";
import Footer from "./footer.js";
import "./App.css";
const HomePage=()=> {
  return (
    <div>
      {/* <Box /> */}
      <Navbar />
      <Marquee1 />
      <Images />
      <div className="buttoncontent">
      <button className="apply-button"><Link to="/form">APPLY NOW</Link></button>
      </div>
      <Marquee2 />
      <br></br>
      <Highlights />

      <Aboutus />
      <Axisoflearning />
      <Vision />

      <Bootstrap />
      <Slides />
      <Footer />
    </div>
  );
}

export default HomePage;
