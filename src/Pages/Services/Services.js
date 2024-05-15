import React from "react";
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

const Services = () => {
  const { t } = useTranslation();

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
            <form className="f-form">
              <SectionTitle
                style={{ textAlign: "center", paddingTop: "100px" }}
              >
                <h6>{t("diabetesdisease")}</h6>
                <h2> {t("Get Your Fast Result Now")} </h2>
              </SectionTitle>
              <div className="column">
                <div className="f-group">
                  <label>{t("Number of Pregnancies")}</label>
                  <input required type="number" name="Number of Pregnancies" />
                </div>
                <div className="f-group">
                  <label>{t("Glucose Level")}</label>
                  <input required type="number" name="Glucose Level" />
                </div>
                <div className="f-group">
                  <label>{t("Blood Pressure")}</label>
                  <input required type="number" name="Blood Pressure" />
                </div>
                <div className="f-group">
                  <label>Skin Thickness</label>
                  <input required type="number" name="Skin Thickness" />
                </div>
              </div>

              <div className="column">
                <div className="f-group">
                  <label>{t("Insulin Level")}</label>
                  <input required type="number" name="Insulin Level" />
                </div>
                <div className="f-group">
                  <label>{t("BMI (Body Mass Index)")}</label>
                  <input required type="number" name="BMI" />
                </div>
                <div className="f-group">
                  <label>{t("Diabetes Pedigree Function")}</label>
                  <input required type="number" name="DPF" />
                </div>
                <div className="f-group">
                  <label>{t("Age")}</label>
                  <input required type="number" name="Age" />
                </div>
              </div>

              <MyButtonLg type="submit" className="msg-btn">
                {t("PREDICT")}
              </MyButtonLg>
            </form>
          </div>

          {/* for overlay background */}
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
