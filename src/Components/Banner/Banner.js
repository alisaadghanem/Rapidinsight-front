import React from "react";
import "./Banner.css";
import { AiOutlineHome } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  OverlayBg1,
  OverlayBg2,
  OverlayBg3,
  OverlayBg4,
  OverlayBg7,
} from "../OverlayBg/OverlayBg";
import { useTranslation } from "react-i18next";

const Banner = ({ page }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  // Function to get the translated path name
  const getTranslatedPathname = (path) => {
    // Check if the path is '/'
    if (path === "/") {
      return t("home");
    } else {
      // Split the path and get the first part (excluding the leading '/')
      const pathParts = path.split("/").filter((part) => part !== "");
      const translatedPath = t(pathParts[0]);
      return translatedPath.charAt(0).toUpperCase() + translatedPath.slice(1);
    }
  };

  return (
    <div className="banner position-relative">
      <div className="container text-center">
        <h3 className="">{page}</h3>
        <div className="path-tab shadow-lg">
          <NavLink
            to="/"
            className={"text-light d-flex align-items-center"}
            style={{ gap: "2px" }}
          >
            <AiOutlineHome size={"1.4rem"} />
            {t("home")}
          </NavLink>
          /<NavLink to={pathname}>{getTranslatedPathname(pathname)}</NavLink>
        </div>
      </div>
      {/* for overlay background */}
      <OverlayBg3 style={{ top: "10%", left: "5%" }} />
      <OverlayBg4 style={{ top: "100%", left: "50%" }} />
      <OverlayBg7 style={{ top: "10%", right: "5%" }} />
      <OverlayBg2 style={{ top: "10%", right: "5%" }} />
    </div>
  );
};

export default Banner;
