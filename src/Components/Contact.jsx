import React from "react";
const Contact = () => {
  return (
    <div className="container p-3">
      <div className="container git">
        <div className="row">
          <div className="text-center col-12 section-title">
            <h3>
              Get<span> in </span>touch
            </h3>
            <p>
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incidit labore lorem ipsum amet madolor sit
              amet.
            </p>
          </div>
        </div>
        <form className="git-form">
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Subject"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
            </div>
            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn btn-primary shadow btn-colord btn-theme"
              >
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
