import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { useTranslation } from "react-i18next";


const Blog = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header></Header>
      <Banner page={t("blog t")} />
      <div className="text-center text-info display-1 fw-bold">
        {t("blog p")}
      </div>
      <Footer />
    </>
  );
};

export default Blog;
