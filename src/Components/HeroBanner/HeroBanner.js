import { MyButtonLg } from "../MyButtons/MyButtons";
import { useNavigate } from "react-router-dom";
import {
  OverlayBg1,
  OverlayBg3,
  OverlayBg4,
  OverlayBg5,
} from "../OverlayBg/OverlayBg";
import React from "react";
import Header from "../Header/Header";
import heroThumb from "../../assets/hero-img/thumb.png";
import "./HeroBanner.css";
import { useTranslation } from "react-i18next";


const HeroBanner = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();


  return (
    <div className="hero-banner position-relative">
      {/* header is here */}
      <Header />
      {/* banner content is here in 2 column at large and 1 at medium  */}
      <div className="hero-banner-content container ">
        <div className="row  justify-content-center align-items-center ">
          {/* left side */}
          <div className="col-xl-7 col-lg-7 col-md-6 col-sm-6 col-12">
            <div className="hero-banner-content-left">
              <h5>{t("stitle")}</h5>
              <h1>{t("btitle")}</h1>
              <MyButtonLg
                action={() => navigate("/about")}
                className={"hero-btn"}
                style={{
                  width: "200px",
                  padding: "12px 0",
                  background: "#f17732",
                }}
              >
                {t("read")}
              </MyButtonLg>
            </div>
          </div>
          {/* right side */}
          <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
            <div className="hero-banner-content-right">
              <figure>
                <img src={heroThumb} alt="heroThumb" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* for overlay animation on background */}
      <OverlayBg1 style={{ top: "50%", left: "20px" }} />
      <OverlayBg5 style={{ top: "25%", left: "20%" }} />
      <OverlayBg3 style={{ top: "30%", left: "50%" }} />
      <OverlayBg4 style={{ top: "50%", left: "50%" }} />
    </div>
  );
};

export default HeroBanner;
