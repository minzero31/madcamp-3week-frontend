import React, { useEffect, useRef, useState } from 'react';
import cloud from '../img/white_cloud.png';
import sun from '../img/sun.png';
import prof_a from '../img/a_professor.png';
import stud_f from '../img/f_student 1.png';
import prof_duck from '../img/duck_leg_prof.png';
import stud_duck from '../img/duck_leg_stud.png';

const Curtain = () => {
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

  useEffect(() => {
    const redCanvas = redCanvasRef.current;
    const redCtx = redCanvas.getContext('2d');
    const skyCanvas = skyCanvasRef.current;
    const skyCtx = skyCanvas.getContext('2d');
    const blackCanvas = blackCanvasRef.current;
    const blackCtx = blackCanvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;

    redCanvas.width = width;
    redCanvas.height = height;
    skyCanvas.width = width;
    skyCanvas.height = height;
    blackCanvas.height = height; // Adjust height of black box
    blackCanvas.width = width;

    const drawCurtain = () => {
      redCtx.fillStyle = '#AA1414';
      redCtx.fillRect(0, 0, width, height);
    };

    const drawSkyBox = () => {
      skyCtx.fillStyle = '#D2F3F8';
      skyCtx.fillRect(0, 0, width, height);
    };

    const drawBlackBox = () => {
      blackCtx.fillStyle = 'black';
      blackCtx.fillRect(0, 0, width, height); // Adjust position and height of black box
    };

    const animationEndHandler = () => {
      drawSkyBox();
      skyCanvas.style.animation = 'skyBoxMove 1s linear forwards';
      setShowCloudAndLines(true);
      setShowSunAndLines(true);
      drawBlackBox();
      blackCanvas.style.animation = 'blackBoxMove 1s linear forwards';
      setshowProfA(true);
      setshowStudF(true);
      setshowDuckProf(true);
      setshowDuckStud(true);
    };

    drawCurtain();

    redCanvas.style.animation = 'curtainMove 3s ease-in-out forwards';

    redCanvas.addEventListener('animationend', animationEndHandler);

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

    const style = document.createElement('style');
    style.appendChild(document.createTextNode(curtainKeyframes));
    style.appendChild(document.createTextNode(skyBoxKeyframes));
    style.appendChild(document.createTextNode(blackBoxKeyframes));
    document.head.appendChild(style);

    return () => {
      redCanvas.removeEventListener('animationend', animationEndHandler);
    };

  }, []);

  return (
    <>
      <canvas
        ref={redCanvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 4,
        }}
      />
      <canvas
        ref={skyCanvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
        }}
      />
      <canvas
        ref={blackCanvasRef}
        className="black-box"
        style={{
          position: 'fixed',
          bottom: 0, // Start from the bottom of the screen
          left: 0,
          width: '100%',
          height: '10%', // Adjust height of black box
          zIndex: 10, // Higher z-index to ensure it's on top
        }}
      />
      {showCloudAndLines && (
        <div
          ref={cloudAndLinesRef}
          className="cloud-and-lines animate__animated animate__bounceInDown"
          style={{
            position: 'absolute',
            left: '380px',
            top: '-90px',
            zIndex: 3,
            display: 'flex',
            gap: '37px',
            paddingLeft: '33px',
          }}
        >
          <div style={{ display: 'flex', gap: '80px', paddingLeft: '33px' }}>
            <div style={{ backgroundColor: 'black', height: '350px', width: '5px' }}></div>
            <div style={{ backgroundColor: 'black', height: '357px', width: '5px' }}></div>
          </div>
          <img
            src={cloud}
            alt="cloud"
            style={{
              width: '230px',
              position: 'absolute',
              top: '300px',
            }}
          />
        </div>
      )}
      {showSunAndLines && (
        <div
          ref={sunAndLinesRef}
          className="sun-and-lines animate__animated animate__bounceInDown"
          style={{
            position: 'absolute',
            left: '820px',
            top: '0px',
            zIndex: 3,
            display: 'flex',
            gap: '37px',
            paddingLeft: '33px',
          }}
        >
          <div style={{ display: 'flex', gap: '60px', paddingLeft: '25px' }}>
            <div style={{ backgroundColor: 'black', height: '200px', width: '5px' }}></div>
            <div style={{ backgroundColor: 'black', height: '250px', width: '5px' }}></div>
          </div>
          <img
            src={sun}
            alt="sun"
            style={{
              width: '130px',
              position: 'absolute',
              top: '180px',
            }}
          />
        </div>
      )}
      {showProfA && (
        <div
          ref={ProfwithA}
          className="prof-with-a animate__animated animate__bounceInUp"
          style={{
            position: 'absolute',
            left: '950px', // Move professor to the right
            top: '-30px',
            zIndex: 3,
            display: 'flex',
            gap: '37px',
            paddingLeft: '33px',
          }}
        >
          <div style={{ display: 'flex', paddingLeft: '120px' }}>
          <div style={{ backgroundColor: 'black', height: '580px', width: '5px' }}></div>
          </div>
          <img
            src={prof_a}
            alt="prof_a"
            style={{
              width: '400px',
              position: 'absolute',
              top: '400px',
            }}
          />
        </div>
      )}
      {showStudF && (
        <div
          ref={StudwithF}
          className="stud-with-f animate__animated animate__bounceInUp"
          style={{
            position: 'absolute',
            left: '200px', // Move student to the left
            top: '-30px',
            zIndex: 3,
            display: 'flex',
            gap: '37px',
            paddingLeft: '33px',
          }}
        >
          <div style={{ display: 'flex', paddingLeft: '50px' }}>
            <div style={{ backgroundColor: 'black', height: '580px', width: '5px' }}></div>
          </div>
          <img
            src={stud_f}
            alt="stud_f"
            style={{
              width: '250px',
              position: 'absolute',
              top: '420px',
            }}
          />
        </div>
      )}
      {showDuckProf && (
        <div
          ref={duckprofAndLinesRef}
          className="duckprof-and-lines animate__animated animate__bounceInUp"
          style={{
            position: 'absolute',
            left: '750px',
            top: '200px',
            zIndex: 3,
            display: 'flex',
            gap: '37px',
            paddingLeft: '33px',
          }}
        >
        <div style={{ display: 'flex', paddingLeft: '30px' }}>
          <div style={{ backgroundColor: 'brown', height: '300px', width: '15px', position: 'absolute', top: '400px' }}></div>
          </div>
          <img
            src={prof_duck}
            alt="prof_duck"
            style={{
              width: '100px',
              position: 'absolute',
              top: '300px',
            }}
          />
        </div>
      )}
      {showDuckStud && (
        <div
          ref={duckstudAndLinesRef}
          className="duckstud-and-lines animate__animated animate__bounceInUp"
          style={{
            position: 'absolute',
            left: '550px',
            top: '200px',
            zIndex: 3,
            display: 'flex',
            gap: '37px',
            paddingLeft: '33px',
          }}
        >
        <div style={{ display: 'flex', paddingLeft: '40px' }}>
          <div style={{ backgroundColor: 'brown', height: '300px', width: '15px', position: 'absolute', top: '400px' }}></div>
          </div>
          <img
            src={stud_duck}
            alt="stud_duck"
            style={{
              width: '100px',
              position: 'absolute',
              top: '300px',
            }}
          />
        </div>
      )}
    </>
  );
};

export default Curtain;
