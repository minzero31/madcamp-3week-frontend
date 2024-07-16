import React, { useContext, useEffect, useRef, useState } from "react";
import cloud from "../img/white_cloud.png";
import sun from "../img/sun.png";
import prof_a from "../img/a_professor.png";
import prof_f from "../img/f_professor.png";
import stud_a from "../img/a_student_1.png";
import stud_f from "../img/f_student_1.png";
import prof_duck from "../img/duck_leg_prof.png";
import stud_duck from "../img/duck_leg_stud.png";
import curtainImg from "../img/curtain.png";
import curtainImg2 from "../img/curtain_2.png";
import hill from "../img/hill.png";
import { Context } from "../AppProvider";
import { useNavigate } from "react-router-dom";

const Curtain = () => {
  const navigate = useNavigate();
  const { state, setState, socket } = useContext(Context);
  const [amIHoldBomb, setAmIHoldBomb] = useState();
  const [bombMove, setBombMove] = useState(false);
  const [bombTimer, setBombTimer] = useState(60);
  const [changeListener, setChangeListener] = useState(0);

  const [studentAnimation, setStudentAnimation] = useState("");
  const [professorAnimation, setProfessorAnimation] = useState("");
  const [pictureChange, setPictureChange] = useState(null);

  const studentAnimationHandler = (inAnimation) => {
    setStudentAnimation(
      inAnimation ? "animate__bounceInLeft" : "animate__bounceOutLeft"
    );
    console.log("studentAnimationHandler");
  };

  const professorAnimationHandler = (inAnimation) => {
    setProfessorAnimation(
      inAnimation ? "animate__bounceInRight" : "animate__bounceOutRight"
    );
    console.log("professorAnimationHandler");
  };

  let index;
  if (state.username === state.roomOwner) {
    index = 0;
  } else {
    index = 1;
  }

  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    // 화면이 처음 마운트 될 때 음악을 재생
    setMusicPlaying(true);

    return () => {
      // 컴포넌트가 unmount 될 때 음악을 멈춤
      setMusicPlaying(false);
    };
  }, []);

  useEffect(() => {
    const audio = new Audio("/mainmusic.mp3");
    if (musicPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [musicPlaying]);

  useEffect(() => {
    console.log(`bombTimer: ${bombTimer}, amIHoldBomb: ${amIHoldBomb}`);
    console.log(index);
  }, [bombTimer, amIHoldBomb]);

  useEffect(() => {
    socket.emit("get_bomb_holder", {
      roomOwner: state.roomOwner,
    });

    socket.on("bomb_holder_updated", (data) => {
      setAmIHoldBomb(data.gameInfo[index]);
      setBombMove(data.bombMove);
      setTimeout(() => {
        setPictureChange(data.bombMove);
      }, 500);
      setChangeListener((prev) => prev + 1);

      studentAnimationHandler(false);
      professorAnimationHandler(false);

      setTimeout(() => {
        studentAnimationHandler(true);
        professorAnimationHandler(true);
      }, 1000);
      // if (bombTimer < data.bombTimer) {
      //   setBombTimer(data.bombTimer);
      // }
    });
  }, []);

  useEffect(() => {
    let timer;
    if (bombTimer !== null && bombTimer > 0) {
      timer = setInterval(() => {
        setBombTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(timer);
            if (amIHoldBomb) {
              if (index === 0) {
                navigate("/loserstud");
              }
              if (index === 1) {
                navigate("/loserprof");
              }
            } else {
              if (index === 0) {
                navigate("/winnerstud");
              }
              if (index === 1) {
                navigate("/winnerprof");
              }
            }
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [bombTimer, amIHoldBomb]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        if (amIHoldBomb) {
          socket.emit("exchange_bomb", {
            roomOwner: state.roomOwner,
          });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [amIHoldBomb]);

  const redCanvasRef = useRef(null);
  const skyCanvasRef = useRef(null);
  const blackCanvasRef = useRef(null);
  const sunAndLinesRef = useRef(null);
  const cloudAndLinesRef = useRef(null);
  const ProfwithA = useRef(null);
  const StudwithF = useRef(null);
  const duckprofAndLinesRef = useRef(null);
  const duckstudAndLinesRef = useRef(null);
  const [showCloudAndLines, setShowCloudAndLines] = useState(false);
  const [showSunAndLines, setShowSunAndLines] = useState(false);
  const [showProfA, setshowProfA] = useState(false);
  const [showStudF, setshowStudF] = useState(false);
  const [showDuckProf, setshowDuckProf] = useState(false);
  const [showDuckStud, setshowDuckStud] = useState(false);
  const [hillMotion, setHillMotion] = useState(false);
  const [curtainMotion, setCurtainMotion] = useState(false);
  const [duckMotion, setDuckMotion] = useState(false);
  const [cloudMotion, setCloudMotion] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHillMotion(true);
    }, 3500);
    setTimeout(() => {
      setCurtainMotion(true);
    }, 2500);

    setInterval(() => {
      setDuckMotion((prev) => !prev);
    }, 3000);

    setInterval(() => {
      setCloudMotion((prev) => !prev);
    }, 2300);

    const redCanvas = redCanvasRef.current;
    const redCtx = redCanvas.getContext("2d");
    const skyCanvas = skyCanvasRef.current;
    const skyCtx = skyCanvas.getContext("2d");
    const blackCanvas = blackCanvasRef.current;
    const blackCtx = blackCanvas.getContext("2d");
    const width = window.innerWidth;
    const height = window.innerHeight;

    redCanvas.width = width;
    redCanvas.height = height;
    skyCanvas.width = width;
    skyCanvas.height = height;
    blackCanvas.height = height; // Adjust height of black box
    blackCanvas.width = width;

    const drawCurtain = () => {
      redCtx.fillStyle = "#AA1414";
      redCtx.fillRect(0, 0, width, height);
    };

    const drawSkyBox = () => {
      skyCtx.fillStyle = "#D2F3F8";
      skyCtx.fillRect(0, 0, width, height);
    };

    const drawBlackBox = () => {
      blackCtx.fillStyle = "black";
      blackCtx.fillRect(0, 0, width, height); // Adjust position and height of black box
    };

    const animationEndHandler = () => {
      drawSkyBox();
      skyCanvas.style.animation = "skyBoxMove 1s linear forwards";
      setShowCloudAndLines(true);
      setShowSunAndLines(true);
      drawBlackBox();
      blackCanvas.style.animation = "blackBoxMove 1s linear forwards";
      setshowProfA(true);
      setshowStudF(true);
      setshowDuckProf(true);
      setshowDuckStud(true);
    };

    drawCurtain();

    redCanvas.style.animation = "curtainMove 3s ease-in-out forwards";

    redCanvas.addEventListener("animationend", animationEndHandler);

    const curtainKeyframes = `
      @keyframes curtainMove {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-50%);
        }
        60% {
          transform: translateY(-40%);
        }
        80% {
          transform: translateY(-60%);
        }
        100% {
          transform: translateY(-90%);
        }
      }
    `;

    const skyBoxKeyframes = `
      @keyframes skyBoxMove {
        0% {
          transform: translateY(-100%);
        }
        50% {
          transform: translateY(-50%);
        }
        100% {
          transform: translateY(0);
        }
      }
    `;

    const blackBoxKeyframes = `
      @keyframes blackBoxMove {
        0% {
          transform: translateY(100%);
        }
        50% {
          transform: translateY(50%);
        }
        100% {
          transform: translateY(0%);
        }
      }
    `;

    const style = document.createElement("style");
    style.appendChild(document.createTextNode(curtainKeyframes));
    style.appendChild(document.createTextNode(skyBoxKeyframes));
    style.appendChild(document.createTextNode(blackBoxKeyframes));
    document.head.appendChild(style);

    return () => {
      redCanvas.removeEventListener("animationend", animationEndHandler);
    };
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      {hillMotion ? (
        <img
          src={hill}
          class="animate__animated animate__bounceInUp"
          style={{
            position: "fixed",
            bottom: 0,
            left: 30,
            width: "97%",
            height: "80%",
            zIndex: 3, // Higher z-index to ensure it's on top
          }}
        />
      ) : null}
      {curtainMotion ? (
        <>
          <img
            class="animate__animated animate__bounceInLeft"
            src={curtainImg}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100%",
              zIndex: 3, // Higher z-index to ensure it's on top
            }}
          />
          <img
            class="animate__animated animate__bounceInRight"
            src={curtainImg2}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100%",
              zIndex: 3, // Higher z-index to ensure it's on top
            }}
          />
        </>
      ) : null}
      <canvas
        ref={redCanvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 4,
        }}
      />
      <canvas
        ref={skyCanvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
        }}
      />
      <canvas
        ref={blackCanvasRef}
        className="black-box"
        style={{
          position: "fixed",
          bottom: 0, // Start from the bottom of the screen
          left: 0,
          width: "100%",
          height: "10%", // Adjust height of black box
          zIndex: 10, // Higher z-index to ensure it's on top
        }}
      />
      {showCloudAndLines && (
        <div
          ref={cloudAndLinesRef}
          className="cloud-and-lines animate__animated animate__bounceInDown"
          style={{
            position: "absolute",
            left: "380px",
            top: "-90px",
            zIndex: 3,
            display: "flex",
            gap: "37px",
            paddingLeft: "33px",
          }}
        >
          <div style={{ display: "flex", gap: "80px", paddingLeft: "33px" }}>
            <div
              style={{
                backgroundColor: "black",
                height: "350px",
                width: "5px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                height: "357px",
                width: "5px",
              }}
            ></div>
          </div>
          <img
            src={cloud}
            alt="cloud"
            style={{
              width: "230px",
              position: "absolute",
              top: "300px",
              animation: cloudMotion ? "jello-horizontal 0.9s both" : null,
              WebkitAnimation: cloudMotion
                ? "jello-horizontal 0.9s both"
                : null,
            }}
          />
        </div>
      )}
      {showSunAndLines && (
        <div
          ref={sunAndLinesRef}
          className="sun-and-lines animate__animated animate__bounceInDown"
          style={{
            position: "absolute",
            left: "820px",
            top: "0px",
            zIndex: 3,
            display: "flex",
            gap: "37px",
            paddingLeft: "33px",
          }}
        >
          <div style={{ display: "flex", gap: "60px", paddingLeft: "25px" }}>
            <div
              style={{
                backgroundColor: "black",
                height: "200px",
                width: "5px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                height: "250px",
                width: "5px",
              }}
            ></div>
          </div>
          <img
            src={sun}
            alt="sun"
            style={{
              width: "130px",
              position: "absolute",
              top: "180px",
            }}
          />
        </div>
      )}
      {showProfA && (
        <div
          ref={ProfwithA}
          className="prof-with-a animate__animated animate__bounceInUp"
          style={{
            position: "absolute",
            left: "950px", // Move professor to the right
            top: "-30px",
            zIndex: 3,
            display: "flex",
            gap: "37px",
            paddingLeft: "33px",
          }}
        >
          <div
            class={`animate__animated ${professorAnimation}`}
            // style={{
            //   WebkitAnimation: bombMove
            //     ? ""
            //     : "vibrate-1 0.3s linear infinite both",
            //   animation: bombMove ? "" : "vibrate-1 0.3s linear infinite both",
            // }}
          >
            <div style={{ display: "flex", paddingLeft: "120px" }}>
              <div
                style={{
                  backgroundColor: "black",
                  height: "580px",
                  width: "5px",
                }}
              ></div>
            </div>
            <img
              src={pictureChange ? prof_a : prof_f}
              alt="prof_a"
              style={{
                width: "400px",
                position: "absolute",
                top: "400px",
              }}
            />
          </div>
        </div>
      )}
      {showStudF && (
        <div
          ref={StudwithF}
          className="stud-with-f animate__animated animate__bounceInUp"
          style={{
            position: "absolute",
            left: "200px", // Move student to the left
            top: "-30px",
            zIndex: 3,
            display: "flex",
            gap: "37px",
            paddingLeft: "33px",
          }}
        >
          <div
            class={`animate__animated ${studentAnimation}`}
            // style={{
            //   WebkitAnimation: bombMove
            //     ? "vibrate-1 0.3s linear infinite both"
            //     : "",
            //   animation: bombMove ? "vibrate-1 0.3s linear infinite both" : "",
            // }}
          >
            <div style={{ display: "flex", paddingLeft: "50px" }}>
              <div
                style={{
                  backgroundColor: "black",
                  height: "580px",
                  width: "5px",
                }}
              ></div>
            </div>
            <img
              src={pictureChange ? stud_f : stud_a}
              alt="stud_f"
              style={{
                width: "250px",
                position: "absolute",
                top: "420px",
              }}
            />
          </div>
        </div>
      )}
      {showDuckProf && (
        <div
          ref={duckprofAndLinesRef}
          className="duckprof-and-lines animate__animated animate__bounceInUp"
          style={{
            position: "absolute",
            left: "750px",
            top: "200px",
            zIndex: 3,
            display: "flex",
            gap: "37px",
            paddingLeft: "33px",
          }}
        >
          <div
            style={{
              animation: duckMotion
                ? "wobble-hor-bottom-reverse 0.8s both"
                : null,
              WebkitAnimation: duckMotion
                ? "wobble-hor-bottom-reverse 0.8s both"
                : null,
            }}
          >
            <div style={{ display: "flex", paddingLeft: "30px" }}>
              <div
                style={{
                  backgroundColor: "brown",
                  height: "300px",
                  width: "15px",
                  position: "absolute",
                  top: "400px",
                }}
              ></div>
            </div>
            <img
              src={prof_duck}
              alt="prof_duck"
              style={{
                width: "100px",
                position: "absolute",
                top: "300px",
              }}
            />
          </div>
        </div>
      )}
      {showDuckStud && (
        <div
          ref={duckstudAndLinesRef}
          className="duckstud-and-lines animate__animated animate__bounceInUp"
          style={{
            position: "absolute",
            left: "550px",
            top: "200px",
            zIndex: 3,
            display: "flex",
            gap: "37px",
            paddingLeft: "33px",
          }}
        >
          <div
            style={{
              animation: duckMotion ? "wobble-hor-bottom 0.8s both" : null,
              WebkitAnimation: duckMotion
                ? "wobble-hor-bottom 0.8s both"
                : null,
            }}
          >
            <div style={{ display: "flex", paddingLeft: "40px" }}>
              <div
                style={{
                  backgroundColor: "brown",
                  height: "300px",
                  width: "15px",
                  position: "absolute",
                  top: "400px",
                }}
              ></div>
            </div>
            <img
              src={stud_duck}
              alt="stud_duck"
              style={{
                width: "100px",
                position: "absolute",
                top: "300px",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Curtain;
