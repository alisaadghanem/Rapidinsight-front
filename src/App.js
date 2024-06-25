import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Cookies from "js-cookie";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import ContactUs from "./Pages/ContactUs/ContactUs";
import About from "./Pages/About/About";
import ScrollToTop from "./Components/ScrollTop";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import RequireAuth from "./Pages/Services/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UserProfile from "./Components/UserProfile/UserProfile";
import Blog from "./Pages/Blog/Blog";
import "./App.css";

const lng = Cookies.get("i18next") || "en";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    lng: lng,
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "locales/{{lng}}/translation.json",
    },
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
  });

function App() {
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    const updateDirection = () => {
      if (i18n.language === "ar") {
        setDirection("rtl");
      } else {
        setDirection("ltr");
      }
    };

    updateDirection();

    // Listen for language changes and update direction
    i18n.on("languageChanged", updateDirection);

    // Clean up event listener on unmount
    return () => {
      i18n.off("languageChanged", updateDirection);
    };
  }, []);

  return (
    <div className={direction}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route
            path="profile"
            element={
              <RequireAuth>
                <UserProfile />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="/blog" element={<Blog />} component={() => <Blog firebaseConfig={firebaseConfig} />}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
