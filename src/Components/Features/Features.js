import React from "react";
import featureIcon1 from "../../assets/features-icon/1386214781637129065.svg";
import featureIcon2 from "../../assets/features-icon/7740208881586786155.svg";
import featureIcon3 from "../../assets/features-icon/19895133511600459995.svg";
import featureIcon4 from "../../assets/features-icon/20784864831711469053.svg";
import "./Features.css";
import { useTranslation } from "react-i18next";


const Features = () => {
  const { t } = useTranslation();
  return (
    <div className="features">
      <div className="features-item">
        <img src={featureIcon1} alt="features-icon" />
        <p>{t("feature1")}</p>
      </div>
      <div className="features-item">
        <img src={featureIcon2} alt="features-icon" />
        <p>{t("feature2")}</p>
      </div>
      <div className="features-item">
        <img src={featureIcon3} alt="features-icon" />
        <p>{t("feature3")}</p>
      </div>
      <div className="features-item">
        <img src={featureIcon4} alt="features-icon" />
        <p>{t("feature4")}</p>
      </div>
    </div>
  );
};

export default Features;
