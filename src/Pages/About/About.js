import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { useTranslation } from "react-i18next";
import {
  OverlayBg1,
  OverlayBg2,
  OverlayBg3,
  OverlayBg4,
  OverlayBg5,
  OverlayBg6,
  OverlayBg7,
  OverlayBg8,
} from "../../Components/OverlayBg/OverlayBg";

import ourteam from "../../assets/about-img/ourteam.png";
import Team from "../../Components/Features/Team";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import "./About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Banner page={t("about")} />
      <div className="about-page" style={{ marginTop: "50px" }}>
        {" "}
        <div className="about position-relative">
          <div className="container">
            <div className="row align-items-center justify-content-center h-100">
              {/* left side */}
              <div className="col-xl-6 col-lg-9 col-md-12 col-sm-12 col-12 about-left">
                <div className="about-gallery">
                  <div className="gallery-item">
                    <figure>
                      <img src={ourteam} alt="" className="img-fluid" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* right side */}
              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12  about-right">
                <div className="about-content">
                  <SectionTitle>
                    <h2>{t("ourteam")}</h2>
                    <h6 className="h2">{t("aboutus")}</h6>
                  </SectionTitle>
                  <Team />
                </div>
              </div>
            </div>
          </div>
          {/* for overlay background */}
          <OverlayBg3 style={{ top: "20%", right: "25%" }} />
          <OverlayBg7 style={{ bottom: "0", right: "20%" }} />
          <OverlayBg2 style={{ bottom: "0", right: "50%" }} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
