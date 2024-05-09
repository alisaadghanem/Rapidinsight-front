import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";
import { MyButtonLg } from "../../Components/MyButtons/MyButtons";
import {
  OverlayBg2,
  OverlayBg3,
  OverlayBg7,
} from "../../Components/OverlayBg/OverlayBg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Banner page={"services"} />
      <div style={{ marginTop: "40px" }}> </div>
      <div className="WorkProcess position-relative">
        <div className="container">
          <SectionTitle style={{ textAlign: "center" }}>
            <h6>Our Services</h6>
            <h2>Let's See What We Have </h2>
          </SectionTitle>
          <div className="WorkProcess-cards">
            <div className="WorkProcess-card shadow-lg bg-light">
              <div>
                <h3>Heart Disease Prediction</h3>
                <h5>COMING SOON</h5>
              </div>
            </div>
            <div className="WorkProcess-card active shadow-lg bg-light">
              <div>
                <h1>Diabetes Disease Predection</h1>
                <h5>Available Now</h5>
                {/* <MyButtonLg
                action={() => navigate("/about")}
                className={"hero-btn"}
                style={{
                  width: "150px",
                  padding: "12px 0",
                  background: "#1f2278",
                }}
              >
                Try it
              </MyButtonLg> */}
              </div>
            </div>
            <div className="WorkProcess-card shadow-lg bg-light">
              <div>
                <h3>Cancer Disease Prediction</h3>
                <h5>COMING SOON</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-f">
          <form className="f-form">
        <SectionTitle style={{ textAlign: "center", paddingTop: "100px"}}>
            <h6>Diabetes Predection</h6>
            <h2> Get Your Fast Result Now </h2>
          </SectionTitle>
            <div className="column">
              <div className="f-group">
                <label>Number of Pregnancies</label>
                <input required type="nmber" name="Number of Pregnancies" />
              </div>
              <div className="f-group">
                <label>Glucose Level</label>
                <input required type="number" name="Glucose Level" />
              </div>
              <div className="f-group">
                <label>Blood Pressure</label>
                <input required type="number" name="Blood Pressure" />
              </div>
              <div className="f-group">
                <label>Skin Thickness</label>
                <input required type="number" name="Skin Thickness" />
              </div>
            </div>

            <div className="column">
              <div className="f-group">
                <label>Insulin Level</label>
                <input required type="number" name="Insulin Level" />
              </div>
              <div className="f-group">
                <label>BMI (Body Mass Index)</label>
                <input required type="number" name="BMI" />
              </div>
              <div className="f-group">
                <label>Diabetes Pedigree Function</label>
                <input required type="number" name="DPF" />
              </div>
              <div className="f-group">
                <label>Age</label>
                <input required type="number" name="Age" />
              </div>
            </div>

            <input type="submit" value="PREDICT" className="msg-btn" />
          </form>
        </div>

        {/* for overlay background */}
        <OverlayBg3 style={{ top: "20%", right: "5%" }} />
        <OverlayBg7 style={{ top: "15%", right: "50%" }} />
        <OverlayBg2 style={{ bottom: "0", left: "5%" }} />
      </div>

      <Footer />
    </div>
  );
};

export default Services;
