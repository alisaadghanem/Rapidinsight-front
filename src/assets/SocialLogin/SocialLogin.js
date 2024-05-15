import React, { useEffect } from "react";
import "./SocialLogin.css";
import { FcGoogle } from "react-icons/fc";
import { MyButtonLg } from "../../Components/MyButtons/MyButtons";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebaseConfig";
import Loading from "../../Components/Loading/Loading";
import { UseToken } from "../../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


const SocialLogin = () => {
  const { t } = useTranslation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = UseToken(user);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="social-login mt-5">
      <div className="divider d-flex justify-content-between align-items-center my-4">
        <div className="divider-line"></div>
        <div>{t("or")}</div>
        <div className="divider-line"></div>
      </div>
      <div>
        <MyButtonLg
          action={() => signInWithGoogle()}
          style={{
            background: "#e1e2f6",
            width: "100%",
            padding: "5px 0",
            color: "#1f2278",
          }}
        >
          <FcGoogle color="red" size={"2rem"} className="pe-2" />
        </MyButtonLg>
      </div>
    </div>
  );
};

export default SocialLogin;
