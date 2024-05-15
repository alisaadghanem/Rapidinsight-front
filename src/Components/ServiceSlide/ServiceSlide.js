import React from "react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import SectionTitle from "../SectionTitle/SectionTitle";
import { MyButtonLg } from "../MyButtons/MyButtons";
import { useNavigate } from "react-router-dom";
import "./ServiceSlide.css";
import { OverlayBg2, OverlayBg3, OverlayBg7 } from "../../Components/OverlayBg/OverlayBg";
import { useTranslation } from "react-i18next";


const ServiceSlide = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="WorkProcess position-relative">
    <div className="container">
      <SectionTitle style={{ textAlign: "center" }}>
        <h6>{t("service")}</h6>
        <h2>{t("Servicest")} </h2>
      </SectionTitle>
      <div className="WorkProcess-cards">
        <div className="WorkProcess-card shadow-lg bg-light">
          <div>
            <h3>{t("heartdisease")}</h3>
            <h5 style={{padding: "12px"}}>{t("coomingsoon")}</h5>
          </div>

        </div>
        <div className="WorkProcess-card active shadow-lg bg-light">
          <div>
            <h1>{t("diabetesdisease")}</h1>
            <h5  style={{padding: "12px"}}>
            {t("availablenow")}
            </h5>
            <MyButtonLg
            action={() => navigate("/service")}
            className={"hero-btn"}
            style={{
              width: "150px",
              padding: "12px 0",
              background: "#1f2278",
            }}
          >
            {t("Try it")}
          </MyButtonLg>
          </div>

        </div>
        <div className="WorkProcess-card shadow-lg bg-light">
          <div>
            <h3>{t("cancerdisease")}</h3>
            <h5 style={{padding: "12px"}}>{t("coomingsoon")}</h5>
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

export default ServiceSlide;
