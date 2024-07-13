import React, { useEffect, useState } from "react";
import caution from "../img/caution.png";

const Modal = ({ modalState, readyState, socket }) => {
  const { isModalOn, setIsModalOn } = modalState;
  const { ready, setReady } = readyState;
  const [countDown, setCountDown] = useState(0);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(countDown) > 0) {
        setCountDown(parseInt(countDown) - 1);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [countDown]);

  useEffect(() => {
    if (ready === 2) {
      setCountDown(5);
      setTimeout(() => setIsModalOn(false), 5000);
    }
  }, [ready, setIsModalOn]);

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
          paddingBottom: "15px",
          fontSize: "15px",
        }}
      >
        <div>
          Ready <span>{ready}</span>/2
        </div>
      </div>
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
            backgroundColor: click ? "#F0F0F0" : "white",
            fontSize: "15px",
            border: "none",
            fontWeight: "bold",
          }}
          disabled={click}
          onClick={() => {
            setClick(true);
            socket.emit("ready");
            setReady(ready + 1);
            // setCountDown(5);
            // setTimeout(() => setIsModalOn(false), 5000);
          }}
        >
          Ready to Start
        </button>
      </div>
    </div>
  );
};

export default Modal;
