import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingLottie from "../lottie/loadingLottie.json";
import { useNavigate } from "react-router-dom";
import shadowDuck from "../img/shadowDuck.png";

const Loading = () => {
  const navigate = useNavigate();
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 1200);
    setTimeout(() => {
      navigate("/login");
    }, 2200);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        background: "radial-gradient(circle, white 13%, black 20%, black 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{ marginTop: "290px", marginLeft: "60px" }}
        class={
          animation
            ? "animate__animated animate__slideOutLeft"
            : "animate__animated animate__slideInRight"
        }
      >
        <img src={shadowDuck} alt="shadowDuck" style={{ width: "250px" }} />
      </div>
    </div>
  );
};

export default Loading;
