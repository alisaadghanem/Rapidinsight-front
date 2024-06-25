import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { GoLocation } from "react-icons/go";
import { MdContactMail } from "react-icons/md";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "./ContactUs.css";

const ContactUs = () => {
  const { t } = useTranslation();

  const handleSendMsg = (e) => {
    e.preventDefault();
    toast.success("Message Send !", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    e.target.reset();
  };

  return (
    <>
      <Header />
      <Banner page={t("contact us")} />
      <div className="container mt-5 section contact-section shadow-lg bg-light">
        <div className="contact-form ">
          <form onSubmit={handleSendMsg}>
            <div className="c-group">
              <label htmlFor="name">{t("name")}</label>
              <input required type="text" name="name" />
            </div>
            <div className="c-group">
              <label htmlFor="email">{t("email")}</label>
              <input required type="email" name="email" />
            </div>
            <div className="c-group">
              <label htmlFor="sub">{t("subject")}</label>
              <input required type="text" name="sub" />
            </div>
            <div className="c-group msg-ta">
              <label htmlFor="msg">{t("message")}</label>
              <textarea required name="" id="" cols="30" rows="10"></textarea>
            </div>
            <input type="submit" value={t("SEND")} className="msg-btn" />
          </form>
        </div>
        <div className="contact-info">
          <div className="c-info-heading">{t("Contact Us For Any Information")}</div>
          {/* info */}
          <div className="c-info-group">
            <div>
              <GoLocation /> <span>{t("Location")}</span>
            </div>

            <p>
            {t("Location1")}
            </p>
          </div>
          {/* info */}
          {/* info */}
          <div className="c-info-group">
            <div>
              <MdContactMail /> <span>{t("Email & Phone")}</span>
            </div>

            <p>
              <span>rapidinsight@gmail.com</span>
              <span>{t("number")}</span>
            </p>
          </div>
          {/* info */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
