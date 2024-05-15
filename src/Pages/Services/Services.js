import React, { useState, useEffect } from "react";
import RequireAdmin from "../RequieAdmin";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { MyButtonLg } from "../../Components/MyButtons/MyButtons";
import {
  OverlayBg2,
  OverlayBg3,
  OverlayBg7,
} from "../../Components/OverlayBg/OverlayBg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import "./Services.css";
import { useTranslation } from "react-i18next";
import Notification from "./Notification";

const Services = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const { t } = useTranslation();
  const [prediction, setPrediction] = useState(null);
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    diabetesPedigreeFunction: "",
    age: "",
  });

  useEffect(() => {
    const validateField = (fieldId, minValue, maxValue) => {
      const inputElement = document.getElementById(fieldId);

      if (inputElement) {
        const messageElement = inputElement.previousElementSibling;

        inputElement.addEventListener("input", function () {
          const value = parseFloat(this.value);

          if (isNaN(value) || value < minValue || value > maxValue) {
            this.style.borderColor = "red";
            this.style.color = "red";
            if (messageElement) {
              messageElement.style.color = "red";
            }
          } else {
            this.style.borderColor = "gray";
            this.style.color = "black";
            if (messageElement) {
              messageElement.style.color = "gray";
            }
          }
        });
      }
    };

    validateField("pregnancies", 0, 17);
    validateField("glucose", 0, 199);
    validateField("bloodPressure", 0, 122);
    validateField("skinThickness", 0, 99);
    validateField("insulin", 0, 846);
    validateField("bmi", 0.0, 67.1);
    validateField("diabetesPedigreeFunction", 0.078, 2.42);
    validateField("age", 0, 99);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setPrediction(data.prediction);

    // Show appropriate modal based on prediction result
    if (prediction === 0) {
      setNotificationMessage(t("You don't have diabetes"));
      setShowNotification(true);
    } else if (prediction === 1) {
      setNotificationMessage(t("You have diabetes"));
      setShowNotification(true);
    }
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let minValue, maxValue;
    switch (name) {
      case "pregnancies":
        minValue = 0;
        maxValue = 17;
        break;
      case "glucose":
        minValue = 0;
        maxValue = 199;
        break;
      case "bloodPressure":
        minValue = 0;
        maxValue = 122;
        break;
      case "skinThickness":
        minValue = 0;
        maxValue = 99;
        break;
      case "insulin":
        minValue = 0;
        maxValue = 846;
        break;
      case "bmi":
        minValue = 0.0;
        maxValue = 67.1;
        break;
      case "diabetesPedigreeFunction":
        minValue = 0.078;
        maxValue = 2.42;
        break;
      case "age":
        minValue = 0;
        maxValue = 99;
        break;
      default:
        minValue = 0;
        maxValue = 999;
    }

    const inputElement = e.target;
    const messageElement = inputElement.previousElementSibling;

    const floatValue = parseFloat(value);
    if (isNaN(floatValue) || floatValue < minValue || floatValue > maxValue) {
      inputElement.style.borderColor = "red";
      inputElement.style.color = "red";
      if (messageElement) {
        messageElement.style.color = "red";
      }
    } else {
      inputElement.style.borderColor = "gray";
      inputElement.style.color = "black";
      if (messageElement) {
        messageElement.style.color = "gray";
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <RequireAdmin>
      <div>
        <Header />
        <Banner page={t("service")} />
        <div style={{ marginTop: "40px" }}> </div>
        <div className="WorkProcess position-relative">
          <div className="container">
            <SectionTitle style={{ textAlign: "center" }}>
              <h6>{t("Services")}</h6>
              <h2>{t("Servicest")} </h2>
            </SectionTitle>
            <div className="WorkProcess-cards">
              <div className="WorkProcess-card shadow-lg bg-light">
                <div>
                  <h3>{t("heartdisease")}</h3>
                  <h5>{t("coomingsoon")}</h5>
                </div>
              </div>
              <div className="WorkProcess-card active shadow-lg bg-light">
                <div>
                  <h1>{t("diabetesdisease")}</h1>
                  <h5>{t("availablenow")}</h5>
                </div>
              </div>
              <div className="WorkProcess-card shadow-lg bg-light">
                <div>
                  <h3>{t("cancerdisease")}</h3>
                  <h5>{t("coomingsoon")}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-f">
            <form className="f-form" onSubmit={handleSubmit}>
              <SectionTitle
                style={{ textAlign: "center", paddingTop: "100px" }}
              >
                <h6>{t("diabetesdisease")}</h6>
                <h2> {t("Get Your Fast Result Now")} </h2>
              </SectionTitle>
              <div className="column">
                <div className="f-group">
                  <label htmlFor="pregnancies">
                    {t("Number of Pregnancies")}
                  </label>
                  <p htmlFor="pregnancies" className="text-gray-500 text-xs">
                    {t("Minimum: 0, Maximum: 17")}
                  </p>
                  <input
                    required
                    type="number"
                    id="pregnancies"
                    name="pregnancies"
                    onChange={handleChange}
                  />
                </div>
                <div className="f-group">
                  <label htmlFor="glucose">{t("Glucose Level")}</label>
                  <p htmlFor="glucose" className="text-gray-500 text-xs">
                    {t("Minimum: 0, Maximum: 199")}
                  </p>
                  <input
                    required
                    type="number"
                    id="glucose"
                    name="glucose"
                    onChange={handleChange}
                  />
                </div>
                <div className="f-group">
                  <label htmlFor="bloodPressure">{t("Blood Pressure")}</label>
                  <p htmlFor="bloodPressure" className="text-gray-500 text-xs">
                    {t("Minimum: 0, Maximum: 122")}
                  </p>
                  <input
                    required
                    type="number"
                    id="bloodPressure"
                    name="bloodPressure"
                    onChange={handleChange}
                  />
                </div>
                <div className="f-group">
                  <label htmlFor="skinThickness">{t("Skin Thickness")}</label>
                  <p htmlFor="skinThickness" className="text-gray-500 text-xs">
                    {t("Minimum: 0, Maximum: 99")}
                  </p>
                  <input
                    required
                    type="number"
                    id="skinThickness"
                    name="skinThickness"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="column">
                <div className="f-group">
                  <label htmlFor="insulin">{t("Insulin Level")}</label>
                  <p htmlFor="insulin" className="text-gray-500 text-xs">
                    {t("Minimum: 0, Maximum: 846")}
                  </p>
                  <input
                    required
                    type="number"
                    id="insulin"
                    name="insulin"
                    onChange={handleChange}
                  />
                </div>
                <div className="f-group">
                  <label htmlFor="bmi">{t("BMI (Body Mass Index)")}</label>
                  <p htmlFor="bmi" className="text-gray-500 text-xs">
                    {t("Minimum: 0.0, Maximum: 67.1")}
                  </p>
                  <input
                    required
                    type="number"
                    id="bmi"
                    name="bmi"
                    onChange={handleChange}
                  />
                </div>
                <div className="f-group">
                  <label htmlFor="diabetesPedigreeFunction">
                    {t("Diabetes Pedigree Function")}
                  </label>
                  <p
                    htmlFor="diabetesPedigreeFunction"
                    className="text-gray-500 text-xs"
                  >
                    {t("Minimum: 0.078, Maximum: 2.42")}
                  </p>
                  <input
                    required
                    type="number"
                    id="diabetesPedigreeFunction"
                    name="diabetesPedigreeFunction"
                    onChange={handleChange}
                  />
                </div>
                <div className="f-group">
                  <label htmlFor="age">{t("Age")}</label>
                  <p htmlFor="age" className="text-gray-500 text-xs">
                    {t("Minimum: 0, Maximum: 99")}
                  </p>
                  <input
                    required
                    type="number"
                    id="age"
                    name="age"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <MyButtonLg type="submit" className="msg-btn">
                {t("PREDICT")}
              </MyButtonLg>
            </form>
            {showNotification && (
              <Notification
                title="The Prediction Is"
                message={notificationMessage}
                onClose={handleCloseNotification}
              />
            )}
          </div>

          {/* Overlay backgrounds */}
          <OverlayBg3 style={{ top: "20%", right: "5%" }} />
          <OverlayBg7 style={{ top: "15%", right: "50%" }} />
          <OverlayBg2 style={{ bottom: "0", left: "5%" }} />
        </div>

        <Footer />
      </div>
    </RequireAdmin>
  );
};

export default Services;
