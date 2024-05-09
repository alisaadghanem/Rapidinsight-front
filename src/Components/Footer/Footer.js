import { MyButtonLg } from "../MyButtons/MyButtons";
import React from "react";
import logo from "../../assets/logo/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="row ">
          <div className="col-xl-4 col-lg-6 col-md-12 col-12">
            <div>
              <div className="f-title">
                <img src={logo} alt="meditro" className="f-logo" />
              </div>
              <p className="f-des">
                Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
                smod tempor incididunt ut labore et.
              </p>
              <span className="pb-2 d-inline-block">Contact Us</span>
              <h3 className="">+20 1017161192</h3>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-12 col-12 d-flex justify-content-center">
            <ul className="f-links list-unstyled">
              <div className="f-title">Socail Media</div>
              <li>Facebook</li>
              <li>linkedin</li>
              <li>Instagram</li>
              <li>twitter</li>
            </ul>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-12 col-12">
            <div className="f-title">subscribe now</div>
            <form className="subscribe-form">
              <input
                type="email"
                placeholder="Email Address"
                className="form-control shadow-lg p-2"
              />{" "}
              <br />
              <MyButtonLg
                style={{
                  color: "white",
                  background: "#1f2278",
                  width: "100%",
                  padding: "10px 0",
                }}
              >
                subscribe now
              </MyButtonLg>
            </form>
          </div>
        </div>
        <hr />
        <code className="text-center d-block f-color">
          Copyright © 2024 Design & Developed by Rapid Insight Team
        </code>
      </div>
    </footer>
  );
};

export default Footer;
