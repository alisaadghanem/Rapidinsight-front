import React from "react";
import "./YesNoButton.css";
import { useTranslation } from "react-i18next";


const YesNoButton = ({ label, name, value, onChange }) => {
    const { t } = useTranslation();
  return (
    <div className="yes-no-button">
      <label className="label">{label}</label>
      <div>
        <button
          type="button"
          className={`btn ${value === "yes" ? "selected" : ""}`}
          onClick={() => onChange(name, "yes")}
        >
          {t("Yes")}
        </button>
        <button
          type="button"
          className={`btn ${value === "no" ? "selected" : ""}`}
          onClick={() => onChange(name, "no")}
        >
          {t("No")}
        </button>
      </div>
    </div>
  );
};

export default YesNoButton;
