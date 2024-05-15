import React from "react";
import "./Notification.css";

const Notification = ({ title, message, onClose }) => {
  return (
    <div className="notification-overlay">
      <div className="notification">
        <h1 className="notification-title">{title}</h1>
        <div className="notification-content">
          <h1 className="notification-title">{message}</h1>
        </div>
        <div className="notification-content ">
        <button onClick={onClose} >Close</button>  
        </div>
      </div>
    </div>
  );
};

export default Notification;
