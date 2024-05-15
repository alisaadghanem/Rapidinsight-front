import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Facilities from "../../Components/Facilities/Facilities";
import Footer from "../../Components/Footer/Footer";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import ServiceSlide from "../../Components/ServiceSlide/ServiceSlide";
import WorkProcess from "../../Components/WorkProcess/WorkProcess";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <section className="section">
        {" "}
        <AboutUs />
      </section>
      <section className="section">
        {" "}
        <ServiceSlide />
      </section>
      <section className="section">
        {" "}
        <WorkProcess />
      </section>
      <section className="section">
        {" "}
        <Facilities />
      </section>
      <Footer />
    </>
  );
};

export default Home;
