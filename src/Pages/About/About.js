import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { useTranslation } from "react-i18next";



const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Banner page={t("about")} />
      <div className="about-page" style={{ marginTop: "100px" }}>
        {" "}
        <AboutUs />
      </div>
      <Footer />
    </>
  );
};

export default About;
