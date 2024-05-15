import React from "react";
import { MyButtonLg } from "../MyButtons/MyButtons";
import { OverlayBg2, OverlayBg3, OverlayBg7 } from "../OverlayBg/OverlayBg";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./WorkProcess.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WorkProcess = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="WorkProcess position-relative">
      <div className="container">
        <SectionTitle style={{ textAlign: "center" }}>
          <h6>{t("wp")}</h6>
          <h2>{t("hw")}</h2>
        </SectionTitle>
        <div className="WorkProcess-cards">
          <div className="WorkProcess-card shadow-lg bg-light">
            <h1>{t("1")}</h1>
            <div>
              <h5>{t("reg")}</h5>
              <p>
                {t("regp")} <br />
                {t("regp1")}
              </p>
            </div>
          </div>
          <div className="WorkProcess-card shadow-lg bg-light">
            <h1>{t("2")}</h1>
            <div>
              <h5>{t("pp")}</h5>
              <p>
              {t("pp1")}
              </p>
            </div>
          </div>
          <div className="WorkProcess-card shadow-lg bg-light">
            <h1>{t("3")}</h1>
            <div>
              <h5>{t("results")}</h5>
              <p>
              {t("resultsp")}
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
