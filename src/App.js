// import { FormComponent } from './formcomponent';
// // import { HomePage, FormPage } from "./home.js";
// // import { BrowserRouter as Router, Route} from "react-router-dom";
// import { useState } from 'react';

// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import Navbar from "./navbar.js";
// import Marquee1 from "./marquee.js";

// import Images from "./carousel.js";
// import Marquee2 from "./marquee2.js";
// // import Button from "./button.js";
// import Highlights from "./highlights.js";
// import Aboutus from "./aboutus.js";

// import Axisoflearning from "./axisoflearning";
// import Vision from "./vision.js";
// import Slides from "./messages1.js";
 import Bootstrap from "./bootstrap.js";
// import Box from "./box.js";
// import Footer from "./footer.js";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// 
import HomePage from "./HomePage";
import FormPage from "./FormPage";
function App() {
  // const [isFormOpen, setIsFormOpen] = useState(false);

  // const handleButtonClick = () => {
  //   setIsFormOpen(true);
  // };
  return (
    <>
      {/* <Box />
      <Navbar />
      <Marquee1 />
      <Images /> */}
      {/* <Button /> */}
      {/* <div>
      {!isFormOpen ? (
        <button onClick={handleButtonClick}>Open Form</button>
      ) : (
        <FormComponent />
      )}
    </div> */}
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/form" component={FormPage} />
        </div>
      </Router>
      {/* <Marquee2 />
      <br></br>
      <Highlights />

      <Aboutus />
      <Axisoflearning />
      <Vision />

      <Bootstrap />
      <Slides />
      <Footer /> */}
    </>
  );
}

export default App;
