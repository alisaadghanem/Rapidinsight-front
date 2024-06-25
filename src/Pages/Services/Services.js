import React, { useState } from "react";
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
import YesNoButton from "./YesNoButton"; // Import the new component

const Services = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    polyuria: "",
    polydipsia: "",
    suddenWeightLoss: "",
    weakness: "",
    polyphagia: "",
    genitalThrush: "",
    visualBlurring: "",
    itching: "",
    age: "",
    gender: "",
    sugarLevelType: "", // New field for the type of sugar level
    sugarLevelValue: "", // New field for the sugar level value
  });
  const [prediction, setPrediction] = useState(null); // State for prediction

  const handleSubmit = async (e) => {
    e.preventDefault();

    let predictionData = {
      age: formData.age,
      gender: formData.gender === "male" ? 1 : 0,
      polyuria: formData.polyuria === "yes" ? 1 : 0,
      polydipsia: formData.polydipsia === "yes" ? 1 : 0,
      "sudden weight loss": formData.suddenWeightLoss === "yes" ? 1 : 0,
      weakness: formData.weakness === "yes" ? 1 : 0,
      polyphagia: formData.polyphagia === "yes" ? 1 : 0,
      "genital thrush": formData.genitalThrush === "yes" ? 1 : 0,
      "visual blurring": formData.visualBlurring === "yes" ? 1 : 0,
      itching: formData.itching === "yes" ? 1 : 0,
      irritability: formData.irritability === "yes" ? 1 : 0,
      "delayed healing": formData.delayedHealing === "yes" ? 1 : 0,
      "partial paresis": formData.partialParesis === "yes" ? 1 : 0,
      "muscle stiffness": formData.muscleStiffness === "yes" ? 1 : 0,
      alopecia: formData.alopecia === "yes" ? 1 : 0,
      obesity: formData.obesity === "yes" ? 1 : 0,
      sugar_level: parseFloat(formData.sugarLevelValue), // Ensure sugar_level is numeric
    };

    // Check if the sugar level test is HbA1cTest and multiply sugar level by 10
    if (formData.sugarLevelType === "HbA1cTest") {
      predictionData.sugar_level *= 10;
    }

    // Determine which endpoint to call based on the sugar level test selected
    let endpoint = "";
    if (formData.sugarLevelType === "afterEating") {
      endpoint = "/RBS";
    } else if (formData.sugarLevelType === "fastingSugar") {
      endpoint = "/FBS";
    } else if (formData.sugarLevelType === "HbA1cTest") {
      endpoint = "/HbHbA1c";
    }

    try {
      const response = await fetch(`http://127.0.0.1:5000${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(predictionData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPrediction(data.prediction);

      // Show appropriate modal based on prediction result
      if (data.prediction === 0) {
        setNotificationMessage(t("You don't have diabetes"));
        setShowNotification(true);
      } else if (data.prediction === 1) {
        setNotificationMessage(t("You have diabetes"));
        setShowNotification(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const handleYesNoChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSugarLevelTypeChange = (type) => {
    setFormData({ ...formData, sugarLevelType: type });
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
                <h2>{t("Get Your Fast Result Now")}</h2>
              </SectionTitle>
              <div className="yes-no-rows">
                <div className="row">
                  <div className="yes-no-rows">
                    <div className="row">
                      <YesNoButton
                        label={t("Frequent Urination")}
                        name="polyuria"
                        value={formData.polyuria}
                        onChange={handleYesNoChange}
                      />
                      <YesNoButton
                        label={t("Always Thirsty")}
                        name="polydipsia"
                        value={formData.polydipsia}
                        onChange={handleYesNoChange}
                      />
                      <YesNoButton
                        label={t("Sudden Weight Loss")}
                        name="suddenWeightLoss"
                        value={formData.suddenWeightLoss}
                        onChange={handleYesNoChange}
                      />
                      <YesNoButton
                        label={t("Weakness")}
                        name="weakness"
                        value={formData.weakness}
                        onChange={handleYesNoChange}
                      />
                    </div>
                    <div className="row">
                      <YesNoButton
                        label={t("Always Hungary")}
                        name="polyphagia"
                        value={formData.polyphagia}
                        onChange={handleYesNoChange}
                      />
                      <YesNoButton
                        label={t("Genital Thrush")}
                        name="genitalThrush"
                        value={formData.genitalThrush}
                        onChange={handleYesNoChange}
                      />
                      <YesNoButton
                        label={t("Blurred Vision")}
                        name="visualBlurring"
                        value={formData.visualBlurring}
                        onChange={handleYesNoChange}
                      />
                      <YesNoButton
                        label={t("Itching")}
                        name="itching"
                        value={formData.itching}
                        onChange={handleYesNoChange}
                      />
                    </div>
                    <div className="row">
                      <YesNoButton
                        label={t("Irritability")}
                        name="irritability"
                        value={formData.irritability}
                        onChange={handleYesNoChange}
                      />
                      <YesNoButton
                        label={t("Delayed Healing")}
                        name="delayedHealing"
                        value={formData.delayedHealing}
                        onChange={handleYesNoChange}
                      />
                      <YesNoButton
                        label={t("Partial Paresis")}
                        name="partialParesis"
                        value={formData.partialParesis}
                        onChange={handleYesNoChange}
                      />
                      <YesNoButton
                        label={t("Muscle Stiffness")}
                        name="muscleStiffness"
                        value={formData.muscleStiffness}
                        onChange={handleYesNoChange}
                      />
                    </div>
                    <div className="row">
                      <YesNoButton
                        label={t("Alopecia")}
                        name="alopecia"
                        value={formData.alopecia}
                        onChange={handleYesNoChange}
                      />
                      <YesNoButton
                        label={t("Obesity")}
                        name="obesity"
                        value={formData.obesity}
                        onChange={handleYesNoChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="f-group" style={{ marginBottom: "50px" }}>
                    <label
                      htmlFor="age"
                      style={{ display: "block", textAlign: "center" }}
                    >
                      {t("Age")}
                    </label>
                    <input
                      required
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="f-group"
                    style={{ marginBottom: "50px", textAlign: "center" }}
                  >
                    <label htmlFor="gender" style={{ display: "block" }}>
                      {t("Gender")}
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: "100%",
                        height: "46px",
                        padding: "5px",
                        borderRadius: "5px",
                        border: "2px solid #565acf",
                      }}
                    >
                      <option value="male">{t("Male")}</option>
                      <option value="female">{t("Female")}</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="sugar-level-type">
                <h2 className="h2">{t("Choose a Sugar Level Test")}</h2>
                <div className="options">
                  <div
                    className={`option ${
                      formData.sugarLevelType === "afterEating"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleSugarLevelTypeChange("afterEating")}
                  >
                    {t("After Eating Test")}
                  </div>
                  <div
                    className={`option ${
                      formData.sugarLevelType === "fastingSugar"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleSugarLevelTypeChange("fastingSugar")}
                  >
                    {t("Fasting Sugar Test")}
                  </div>
                  <div
                    className={`option ${
                      formData.sugarLevelType === "HbA1cTest" ? "selected" : ""
                    }`}
                    onClick={() => handleSugarLevelTypeChange("HbA1cTest")}
                  >
                    {t("HbA1c Test")}
                  </div>
                </div>
              </div>
              {formData.sugarLevelType && ( // Conditionally render input based on sugarLevelType
                <div className="f-group">
                  <label htmlFor="sugarLevelValue">
                    {t("Sugar Level Value")}
                  </label>
                  <input
                    required
                    type="number"
                    id="sugarLevelValue"
                    name="sugarLevelValue"
                    value={formData.sugarLevelValue}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              <MyButtonLg
                type="submit"
                className="msg-btn"
                style={{ marginBottom: "100px" }}
              >
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
