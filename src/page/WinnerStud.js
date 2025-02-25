import React, { useEffect, useContext } from 'react';
import Confetti from 'canvas-confetti';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import 'animate.css';
import { Context } from '../AppProvider'; // Import the context
import grad_dgist from '../img/grad_dgist.png';
import grad_ehwu from '../img/grad_ehwu.png';
import grad_gist from '../img/grad_gist.png';
import grad_hyu from '../img/grad_hyu.png';
import grad_jnu from '../img/grad_jnu.png';
import grad_kaist from '../img/grad_kaist.png';
import grad_pnu from '../img/grad_pnu.png';
import grad_skku from '../img/grad_skku.png';
import grad_smwu from '../img/grad_smwu.png';
import winnerstud from '../img/winnerstud_ending.png';
import winnerstage from '../img/winnerstage.png';
import curtainImg from "../img/curtain.png";
import curtainImg2 from "../img/curtain_2.png";

const WinnerStud = () => {
  const { state } = useContext(Context); 
  const navigate = useNavigate();

  useEffect(() => {
    const audio = new Audio("/winnermusic.mp3");
    audio.play();

    // Function to fade out the music
    const fadeOut = (audio) => {
      const fadeAudio = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume -= 0.05;
        } else {
          clearInterval(fadeAudio);
          audio.pause();
          navigate('/endingcredit'); 
        }
      }, 200); // Reduce volume every 200ms
    };

    // Set a timer to fade out the music after 20 seconds
    const timer = setTimeout(() => fadeOut(audio), 20000);

    return () => {
      clearTimeout(timer);
      audio.pause();
    };
  }, [navigate]);

  useEffect(() => {
    // Confetti effect every 4 seconds
    const interval = setInterval(() => {
      Confetti({
        particleCount: 150,
        spread: 150,
        origin: { y: 0.5 } // Center of the screen height
      });
    }, 3000);

    // Clear interval after 3 repetitions
    setTimeout(() => {
      clearInterval(interval);
    }, 15000); // 4 seconds interval for 3 times (4s * 3 = 12s)

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Determine the graduation image based on the userColleague value
  let gradImage;
  switch (state.userColleague) {
    case 'DGIST':
      gradImage = grad_dgist;
      break;
    case '이화여자대학교':
      gradImage = grad_ehwu;
      break;
    case 'GIST':
      gradImage = grad_gist;
      break;
    case '한양대학교':
      gradImage = grad_hyu;
      break;
    case '전남대학교':
      gradImage = grad_jnu;
      break;
    case 'KAIST':
      gradImage = grad_kaist;
      break;
    case '부산대학교':
      gradImage = grad_pnu;
      break;
    case '성균관대학교':
      gradImage = grad_skku;
      break;
    case '숙명여자대학교':
      gradImage = grad_smwu;
      break;
    default:
      gradImage = grad_kaist; // Default image
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div
        className="animate__animated animate__bounceInUp"
        style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          height: '25%',
          backgroundColor: 'black',
          zIndex: 0,
        }}
      ></div>
      <img
        src={winnerstage}
        alt="Winner Stage"
        className="animate__animated animate__bounceInUp"
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '450px',
          width: '600px',
          height: '230px',
          zIndex: 1,
          animationDelay: '1s',
          animationFillMode: 'both'
        }}
      />
      <img
        src={winnerstud}
        alt="Winner Student"
        className="animate__animated animate__bounceInDown"
        style={{
          position: 'absolute',
          bottom: '22%',
          left: '630px',
          width: '230px',
          height: 'auto',
          zIndex: 2,
          animationDelay: '2s',
          animationFillMode: 'both'
        }}
      />
      <div
        style={{
          width: '300px',
          height: '360px',
          position: 'absolute',
          right: '200px',
          top: '40%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <img
          src={gradImage} // Use the determined image
          alt="Graduation"
          style={{
            width: '80%',
            height: '80%',
            animation: 'tilt-in-fwd-tr 1s ease forwards',
            animationDelay: '4s',
            animationFillMode: 'both'
          }}
        />
      </div>
      {state.curtainMotion && (
        <>
          <img
            className="animate__animated animate__bounceInLeft"
            src={curtainImg}
            style={{
              position: "fixed",
              top: '40%',
              left: '10%',
              height: "100%",
              width: "50%",
              zIndex: 5, // Higher z-index to ensure it's on top
              animationDelay: '3s', // Adjust delay to ensure it comes after the other animations
              animationFillMode: 'both'
            }}
          />
          <img
            className="animate__animated animate__bounceInRight"
            src={curtainImg2}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100%",
              width: "50%",
              zIndex: 5, // Higher z-index to ensure it's on top
              animationDelay: '3s', // Adjust delay to ensure it comes after the other animations
              animationFillMode: 'both'
            }}
          />
        </>
      )}
      <style>
        {`
          @keyframes tilt-in-fwd-tr {
            0% {
              transform: rotateY(30deg) rotateX(30deg) translateY(-300px) translateZ(-500px);
              opacity: 0;
            }
            100% {
              transform: rotateY(0deg) rotateX(0deg) translateY(0) translateZ(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default WinnerStud;
