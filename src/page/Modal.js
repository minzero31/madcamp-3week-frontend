import React, { useEffect, useState } from "react";
import caution from "../img/caution.png";

const Modal = ({ state }) => {
  const { isModalOn, setIsModalOn } = state;
  const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(countDown) > 0) {
        setCountDown(parseInt(countDown) - 1);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [countDown]);

  return (
    <div
      style={{
        backgroundColor: "#F6F5C7",
        height: "400px",
        width: "600px",
        borderRadius: "20px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        border: "3px solid black",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <img
          src={caution}
          alt="caution"
          style={{ width: "70px", height: "70px" }}
        />
        <div style={{ color: "#FD3A69", fontWeight: "bold", fontSize: "35px" }}>
          CAUTION
        </div>
        <img
          src={caution}
          alt="caution"
          style={{ width: "70px", height: "70px" }}
        />
      </div>
      {countDown ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "18px",
            flexGrow: 0.7,
            justifyContent: "center",
            fontWeight: "bold",
            gap: "20px",
          }}
        >
          <div>게임이 시작됩니다.</div>
          <div>
            {countDown}
            <b>s</b>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "18px",
            flexGrow: 0.7,
            justifyContent: "center",
            fontWeight: "bold",
            gap: "20px",
          }}
        >
          <div>글~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
          <div>
            명심하세요! 에러는{" "}
            <b style={{ color: "#FD3A69", textDecoration: "underline" }}>
              5초 안에
            </b>{" "}
            전달해야 합니다!
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: "30px",
          width: "100%",
        }}
      >
        <button
          style={{
            width: "200px",
            height: "35px",
            borderRadius: "20px",
            fontSize: "15px",
            border: "none",
            fontWeight: "bold",
          }}
          onClick={() => {
            setCountDown(5);
            setTimeout(() => setIsModalOn(false), 5000);
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Modal;
