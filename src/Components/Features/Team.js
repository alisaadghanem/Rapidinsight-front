import React from "react";
import "./Team.css";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();
  return (
    <div className="team">
      <div className="team-item">
        <p>{t("Ali")}</p>
      </div>
      <div className="team-item">
        <p>{t("Ahmed")}</p>
      </div>
      <div className="team-item">
        <p>{t("Ashraf")}</p>
      </div>
      <div className="team-item">
        <p>{t("Eslam")}</p>
      </div>
      <div className="team-item" style={{alignItems: 'center'}}>
        <p>{t("Ezz")}</p>
      </div>
    </div>
  );
};

export default Team;
