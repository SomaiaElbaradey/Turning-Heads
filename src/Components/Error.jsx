import React from "react";
import { NavLink } from "react-router-dom";

import img from "../fonts/01.png";

const Error = () => {
  const link = {
    style: "none",
    width: "100px!important",
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 align-self-start text-center m-3">
          <div class="row form-content">
            <div class="col-12">
              <div class="step-title">
                <h2 class="featured">Page 404 </h2>
                <p>
                  Lorem ipsum madolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor coli incidit labore lorem ipsum amet
                  madolor sit amet.
                </p>
              </div>

              <div id="RegForm" className="row text-center form-content">
                <div className="col-12 step-group">
                  <NavLink
                    style={link}
                    className="shadow btn-colord btn-theme"
                    to="/"
                  >
                    Home<i className="fas fa-arrow-right pl-2"></i>
                  </NavLink>
                </div>

                <div className="col-md-5 content-images pl-md-5 d-none d-md-block mt-5 text-center">
                  <div className="gallery register">
                    <div className="mask-radius"></div>
                    <img src={img} className="fit-image" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
