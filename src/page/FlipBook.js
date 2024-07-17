import React, { useContext, useEffect, useRef, useState } from "react";
import $ from "jquery";
import "turn.js";
import comic1 from "../img/comic1.png";
import comic2 from "../img/comic2.png";
import comic3 from "../img/comic3.png";
import comic4 from "../img/comic4.png";
import { useNavigate } from "react-router-dom";
import { Context } from "../AppProvider";

const FlipBook = () => {
  const { state, setState, socket } = useContext(Context);
  const [onMouse, setOnMouse] = useState(false);
  const flipbookRef = useRef(null);
  const audioRef = useRef(null);
  const navigate = useNavigate();
  let index;
  if (state.username === state.roomOwner) {
    index = 0;
  } else {
    index = 1;
  }
  // 0이 학생

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.jQuery = $;
      window.$ = $;
      require("turn.js");
    }

    const flipbook = flipbookRef.current;

    $(flipbook).turn({
      width: 800,
      height: 600,
      autoCenter: true,
    });

    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0;
      audio.play().catch((e) => {
        console.log("Audio play failed: ", e);
      });
      let volume = 0;
      const fadeIn = setInterval(() => {
        if (volume < 1) {
          volume = Math.min(volume + 0.01, 1);
          audio.volume = volume;
        } else {
          clearInterval(fadeIn);
        }
      }, 50); // 50ms마다 볼륨 증가
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  const handleButtonClick = () => {
    navigate("/waiting");
    const audio = audioRef.current;
    if (audio) {
      let volume = audio.volume;
      const fadeOut = setInterval(() => {
        if (volume > 0) {
          volume = Math.max(volume - 0.01, 0);
          audio.volume = volume;
        } else {
          clearInterval(fadeOut);
          audio.pause();
          audio.currentTime = 0;
        }
      }, 50); // 50ms마다 볼륨 감소
    }
  };

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
        className="animate__animated animate__fadeIn"
        style={{
          background: "radial-gradient(circle, white, #F1E4C2, black)",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <audio ref={audioRef} src="/flipbookmusic.mp3" loop />
        <div
          className="animate__animated animate__fadeIn"
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
                fontSize: "50px",
                marginBottom: "10px",
              }}
            >
              - Casting -
            </div>
            <div
              style={{
                fontFamily: "Alice, sans-serif",
                fontSize: "25px",
                marginBottom: "85px",
              }}
            >
              by{" "}
              <span style={{ fontSize: "25px", fontFamily: "InkLipquid" }}>
                김민영
              </span>
            </div>
            <div
              style={{
                fontFamily: "Alice, sans-serif",
                fontSize: "25px",
                fontWeight: "-moz-initial",
              }}
            >
              revision by{" "}
              <span style={{ fontSize: "25px", fontFamily: "InkLipquid" }}>
                임지민
              </span>
            </div>
          </div>
          <div style={pageStyle}>
            <img src={comic1} alt="comic1" style={{ width: "80%" }} />
          </div>
          <div style={pageStyle}>
            <img src={comic2} alt="comic1" style={{ width: "80%" }} />
          </div>
          <div style={pageStyle}>
            <img src={comic3} alt="comic1" style={{ width: "80%" }} />
          </div>
          <div style={pageStyle}>
            <img src={comic4} alt="comic1" style={{ width: "80%" }} />
          </div>
          <div style={pageStyle}>
            <div
              style={{
                fontFamily: "InkLipquid",
                textDecoration: "underline",
                fontSize: "30px",
              }}
            >
              당신은 {index === 0 ? " 학생" : " 교수"} 입니다.
            </div>
            {/* <div>처음 화면을 클릭 후 엔터키를 통해 학점을 바꾸세요!</div> */}
          </div>
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
                onClick={handleButtonClick}
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
