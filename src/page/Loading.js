import React, { useEffect } from "react";
import Lottie from "lottie-react";
import loadingLottie from "../lottie/loadingLottie.json";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "250px",
          height: "250px",
          backgroundColor: "#f5f5f5",
          borderRadius: "50%",
          padding: "1px",
        }}
      >
        <Lottie animationData={loadingLottie} />
      </div>
    </div>
  );
};

export default Loading;
