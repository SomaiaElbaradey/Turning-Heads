import React from "react";
const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 text-center">
            <div className="copyright my-2">
              <p>
                © Copyright 2021 <a>Turning Heads</a>, Somaia Elbaradey, All rights
                reserved.
              </p>
            </div>
            <div className="back">
              <a href="" className="back-top hide">
                <i className="fas fa-long-arrow-alt-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
