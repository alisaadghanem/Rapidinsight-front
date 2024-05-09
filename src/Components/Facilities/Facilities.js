import { UseFacilities } from "../../hooks";
import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Facilities.css";
import {
  OverlayBg1,
  OverlayBg2,
  OverlayBg6,
  OverlayBg3,
  OverlayBg7,
  OverlayBg4,
  OverlayBg5,
  OverlayBg8,
} from "../OverlayBg/OverlayBg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MyButtonLg } from "../MyButtons/MyButtons";
import { Link } from "react-router-dom";
import symptom1 from "../../assets/symp/symptom_1.png";
import symptom2 from "../../assets/symp/symptom_2.png";
import symptom3 from "../../assets/symp/symptom_3.png";
import symptom4 from "../../assets/symp/symptom_4.png";
import symptom5 from "../../assets/symp/symptom_5.png";
import symptom6 from "../../assets/symp/symptom_6.png";
import symptom7 from "../../assets/symp/symptom_7.png";
import symptom8 from "../../assets/symp/symptom_8.png";
import symptom9 from "../../assets/symp/symptom_9.png";
import prev1 from "../../assets/symp/prev1.png";
import prev2 from "../../assets/symp/prev2.png";
import prev3 from "../../assets/symp/prev3.png";
import prev4 from "../../assets/symp/prev4.png";
import prev7 from "../../assets/symp/prev7.png";
import prev6 from "../../assets/symp/prev6.png";
import treat1 from "../../assets/symp/treat1.png";
import treat2 from "../../assets/symp/treat2.png";
import treat3 from "../../assets/symp/treat3.png";
import bannerImage from "../../assets/symp/test1.png";

const Facilities = () => {
  const [facilities] = UseFacilities();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const symptomsImages = [
    symptom1,
    symptom2,
    symptom3,
    symptom4,
    symptom5,
    symptom6,
    symptom7,
    symptom8,
    symptom9,
  ];

  const prevImages = [prev1, prev2, prev3, prev4, prev7, prev6];
  const treatImages = [treat1, treat2, treat3];

  const imageTexts = [
    "Helathy Food",
    "Sleep Well",
    "Exercises",
    "Stay Hydrated",
    "Avoid Alcohol & Cigrattes",
    "Maintain A Healthy Weight",
  ];
  const imageTextsTreat = ["Sugar Control", "Medicines", "Insulin Therapy"];

  return (
    <div className="facility position-relative">
      <div className="container">
        {/* "Learn More" title */}
        <SectionTitle style={{ textAlign: "center" }}>
          <h6>Learn More</h6>
        </SectionTitle>

        {/* Symptoms Section */}
        <div>
          <SectionTitle style={{ textAlign: "center" }}>
            <h2>Diabetes Symptoms</h2>
          </SectionTitle>
          <div className="symptoms-grid">
            {[0, 1, 2].map((row) => (
              <div key={row} className="symptoms-row">
                {[0, 1, 2].map((col) => (
                  <div key={col} className="pics-symp">
                    <img
                      src={symptomsImages[row * 3 + col]}
                      alt={`Symptom ${row * 3 + col + 1}`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* treat Section */}
        <div>
          <SectionTitle style={{ textAlign: "center" }}>
            <h2>Diabetes Treatment</h2>
          </SectionTitle>
          <div className="symptoms-grid">
            {[0].map((row) => (
              <div key={row} className="symptoms-row">
                {[0, 1, 2].map((col) => (
                  <div key={col} className="pics-prev">
                    <img
                      src={treatImages[row * 3 + col]}
                      alt={`prev ${row * 3 + col + 1}`}
                    />
                    <p className="prev-p">{imageTextsTreat[row * 3 + col]}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* prev Section */}
        <div>
          <SectionTitle style={{ textAlign: "center", paddingTop: "50px" }}>
            <h2>Diabetes Prevention</h2>
          </SectionTitle>
          <div className="symptoms-grid">
            {[0, 1].map((row) => (
              <div key={row} className="symptoms-row">
                {[0, 1, 2].map((col) => (
                  <div key={col} className="pics-prev">
                    <img
                      src={prevImages[row * 3 + col]}
                      alt={`prev ${row * 3 + col + 1}`}
                    />
                    <p className="prev-p">{imageTexts[row * 3 + col]}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle style={{ textAlign: "center", paddingTop: "50px" }}>
            <h2>How To Check Sugar Level</h2>
          </SectionTitle>
          <div className="banner-photo">
            <img src={bannerImage} alt="Banner" />
          </div>
        </div>

        {/* Diabetes Types Section */}
        <div >
          <SectionTitle style={{ textAlign: "center" }}>
            <h2>Diabetes Types</h2>
          </SectionTitle>
        </div>

        <div
          className="facility-cards position-relative "
          style={{ overflow: "hidden" }}
        >
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={false}
            emulateTouch={true}
            infiniteLoop
            autoPlay
            stopOnHover={false}
            swipeable={true}
            interval={8000}
            selectedItem={currentSlide}
            onChange={handleSlideChange}
          >
            {facilities.map((facility, id) => {
              const { facilities, thumb, link } = facility;
              console.log("Link:", link);

              return (
                <div key={id} className="facility-card bg-light">
                  <h1>{facilities}</h1>

                  <p>{thumb}</p>

                  <Link to={link} target="_blank" rel="noopener noreferrer">
                    <MyButtonLg
                      className={"hero-btn"}
                      style={{
                        width: "150px",
                        padding: "12px 0",
                        background: "#1f2278",
                        textDecoration: "none",
                      }}
                    >
                      Read More
                    </MyButtonLg>
                  </Link>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <OverlayBg5 style={{ top: "25%", left: "25%" }} />
      <OverlayBg5 style={{ top: "75%", left: "40%" }} />
      <OverlayBg4 style={{ top: "48%", left: "60%" }} />
      <OverlayBg3 style={{ top: "30%", right: "5%" }} />
      <OverlayBg7 style={{ top: "15%", right: "30%" }} />
      <OverlayBg7 style={{ top: "80%", right: "5%" }} />
      <OverlayBg1 style={{ bottom: "10%", right: "2%" }} />
      <OverlayBg2 style={{ bottom: "2%", left: "2%" }} />
      <OverlayBg1 style={{ bottom: "60%", left: "35%" }} />
      <OverlayBg2 style={{ bottom: "40%", right: "30%" }} />
      <OverlayBg6 style={{ top: "60%", left: "10%" }} />
      <OverlayBg8 style={{ top: "25%", left: "10%" }} />
    </div>
  );
};

export default Facilities;
