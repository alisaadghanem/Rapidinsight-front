import { MyButtonLg } from "../MyButtons/MyButtons";
import React from "react";
import logo from "../../assets/logo/logo.png";
import "./Footer.css";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer ">
      <div className="container">
        <div className="row ">
          <div className="col-xl-4 col-lg-6 col-md-12 col-12">
            <div>
              <div className="f-title">
                <img src={logo} alt="meditro" className="f-logo" />
              </div>
              <p className="f-des">
              {t("footer p")}
              </p>
              <span className="pb-2 d-inline-block">{t("Contact Us")}</span>
              <h3 className="">{t("number")}</h3>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-12 col-12 d-flex justify-content-center">
            <ul className="f-links list-unstyled">
              <div className="f-title">{t("Socail Media")}</div>
              <li>{t("Facebook")}</li>
              <li>{t("linkedin")}</li>
              <li>{t("Instagram")}</li>
              <li>{t("twitter")}</li>
            </ul>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-12 col-12">
            <div className="f-title">{t("subscribe now")}</div>
            <form className="subscribe-form">
              <input
                type="email"
                placeholder={t("Email Address")}
                className="form-control shadow-lg p-2"
              />{" "}
              <br />
              <MyButtonLg
                style={{
                  color: "white",
                  background: "#1f2278",
                  width: "100%",
                  padding: "10px 0",
                }}
              >
                {t("subscribe")}
              </MyButtonLg>
            </form>
          </div>
        </div>
        <hr />
        <code className="text-center d-block f-color">
          Copyright © 2024 Design & Developed by Rapid Insight Team
        </code>
      </div>
    </footer>
  );
};

export default Footer;
