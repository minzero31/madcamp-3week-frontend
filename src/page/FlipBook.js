import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "turn.js";
import { useNavigate } from "react-router-dom";

const FlipBook = () => {
  const [onMouse, setOnMouse] = useState(false);
  const flipbookRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // jQuery와 turn.js를 전역 범위에서 사용할 수 있도록 설정
    if (typeof window !== "undefined") {
      window.jQuery = $;
      window.$ = $;
      require("turn.js");
    }

    const flipbook = flipbookRef.current;

    // turn.js 초기화
    $(flipbook).turn({
      width: 800,
      height: 600,
      autoCenter: true,
    });

    // return () => {
    //   if (flipbook) {
    //     $(flipbook).turn("destroy").remove();
    //   }
    // };
  }, []);

  const flipbookStyle = {
    width: "800px",
    height: "600px",
    margin: "auto",
  };

  const pageStyle = {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "20px",
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <div
        class="animate__animated animate__fadeIn"
        style={{
          background: "radial-gradient(circle, white, #F1E4C2, black)",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          class="animate__animated animate__fadeIn"
          id="flipbook"
          ref={flipbookRef}
          style={flipbookStyle}
        >
          <div style={pageStyle}>
            <div
              style={{
                fontFamily: "Alice, sans-serif",
                fontSize: "25px",
                marginBottom: "20px", // 여백 추가
              }}
            >
              Play Script
            </div>
            <div
              style={{
                fontFamily: "Alice, sans-serif",
                fontWeight: "bold",
                fontSize: "35px",
                marginBottom: "10px",
              }}
            >
              - Movie Night -
            </div>
            <div
              style={{
                fontFamily: "Alice, sans-serif",
                fontSize: "15px",
                marginBottom: "85px",
              }}
            >
              by{" "}
              <span style={{ fontSize: "17px", fontFamily: "InkLipquid" }}>
                김민영
              </span>
            </div>
            <div
              style={{
                fontFamily: "Alice, sans-serif",
                fontSize: "15px",
                fontWeight: "-moz-initial",
              }}
            >
              revision by{" "}
              <span style={{ fontSize: "17px", fontFamily: "InkLipquid" }}>
                임지민
              </span>
            </div>
          </div>
          <div style={pageStyle}>두 번째 페이지</div>
          <div style={pageStyle}>세 번째 페이지</div>
          <div style={pageStyle}>네 번째 페이지</div>
          <div style={pageStyle}>다섯 번째 페이지</div>
          <div style={pageStyle}>
            <div
              style={{
                fontFamily: "Alice, sans-serif",
                fontSize: "55px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              The End
            </div>
            <div
              style={{
                width: "150px",
                height: "40px",
                border: "3px solid black",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                backgroundColor: onMouse ? "black" : "white",
              }}
            >
              <div
                style={{
                  fontFamily: "Alice, sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  paddingLeft: "30px",
                  color: onMouse ? "white" : "black",
                }}
                onClick={() => {
                  navigate("/waiting");
                }}
                onMouseOver={() => {
                  setOnMouse(true);
                }}
                onMouseOut={() => {
                  setOnMouse(false);
                }}
              >
                Go to game
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBook;