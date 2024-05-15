import React from "react";
import "./Notification.css";
import { useTranslation } from "react-i18next";

const Notification = ({ message, onClose }) => {
    const { t } = useTranslation();
  return (
    <div className="notification-overlay">
      <div className="notification">
        <h1 className="notification-title">{t("The Prediction Is")}</h1>
        <div className="notification-content">
          <h1 className="notification-title">{message}</h1>
        </div>
        <div className="notification-content ">
        <button onClick={onClose} >{t("Close")}</button>  
        </div>
      </div>
    </div>
  );
};

export default Notification;
