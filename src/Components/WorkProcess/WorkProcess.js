import React from "react";
import { MyButtonLg } from "../MyButtons/MyButtons";
import { OverlayBg2, OverlayBg3, OverlayBg7 } from "../OverlayBg/OverlayBg";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./WorkProcess.css";
import { useNavigate } from "react-router-dom";

const WorkProcess = () => {
  const navigate = useNavigate();
  return (
    <div className="WorkProcess position-relative">
      <div className="container">
        <SectionTitle style={{ textAlign: "center" }}>
          <h6>Working Process</h6>
          <h2>How we works? </h2>
        </SectionTitle>
        <div className="WorkProcess-cards">
          <div className="WorkProcess-card shadow-lg bg-light">
            <h1>01</h1>
            <div>
              <h5>Registration</h5>
              <p>
              The registration process involves providing your personal information and creating login credentials to access the platform or service.    
              <br />
              during registration, users may be required to verify their email address or phone number to enhance security. 
              </p>
            </div>
            
          </div>
          <div className="WorkProcess-card shadow-lg bg-light">
            <h1>02</h1>
            <div>
              <h5>Predection Process</h5>
              <p>
              the prediction process involves inputting patient health data (e.g., glucose levels, BMI, Blood Pressure) into the SVM algorithm, which then classifies the likelihood of diabetes based on learned patterns from training data.             
               </p>
            </div>
            
          </div>
          <div className="WorkProcess-card shadow-lg bg-light">
            <h1>03</h1>
            <div>
              <h5>Results</h5>
              <p>
              The results typically include a prediction of whether the individual is at risk of diabetes or not, These results can inform healthcare professionals and individuals about potential preventive measures or necessary interventions.
              </p>
            </div>
            
          </div>
        </div>
      </div>
      {/* for overlay background */}
      <OverlayBg3 style={{ top: "20%", right: "5%" }} />
      <OverlayBg7 style={{ top: "15%", right: "50%" }} />
      <OverlayBg2 style={{ bottom: "0", left: "5%" }} />
    </div>
  );
};

export default WorkProcess;
