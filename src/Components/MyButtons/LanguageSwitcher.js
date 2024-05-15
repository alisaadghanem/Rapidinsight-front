import React from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import "./MyButtons.css";


const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    Cookies.set('i18next', lng); // Set language in cookie
  };

  return (
    <div>
      <button className="switch-btn"  onClick={() => changeLanguage("en")}>{t("english")}</button>
      <button className="switch-btn" onClick={() => changeLanguage("ar")}>{t("arabic")}</button>
    </div>
  );
};

export default LanguageSwitcher;
