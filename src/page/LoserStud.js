import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import f_score from '../img/f_score.png';
import loserstud from '../img/loserstud_ending.png';
import laptop from '../img/laptop.png';

const LoserStud = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate(); // useNavigate를 사용하여 페이지 전환

  useEffect(() => {
    const audio = new Audio("/losermusic.mp3");
    audio.play();

    // 음악을 서서히 줄이는 함수
    const fadeOut = (audio) => {
      const fadeAudio = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume -= 0.05;
        } else {
          clearInterval(fadeAudio);
          audio.pause();
          navigate('/endingcredit'); // EndingCredits 페이지로 이동
        }
      }, 200); // 200ms마다 볼륨 감소
    };

    // 20초 후에 fadeOut 함수 호출
    const timer = setTimeout(() => fadeOut(audio), 20000);

    return () => {
      clearTimeout(timer);
      audio.pause();
    };
  }, [navigate]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const drops = [];
    const numDrops = 100;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Drop {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 20 + 10;
        this.speed = Math.random() * 3 + 2;
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      fall() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -this.length;
          this.x = Math.random() * canvas.width;
        }
      }
    }

    for (let i = 0; i < numDrops; i++) {
      drops.push(new Drop());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let drop of drops) {
        drop.draw();
        drop.fall();
      }
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
      <div
        style={{
          width: '250px',
          height: '300px',
          position: 'absolute',
          right: '300px',
          top: '30%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'tilt-in-fwd-tr 1s ease forwards',
          animationDelay: '3s',
          animationFillMode: 'both'
        }}
      >
        <img
          src={f_score}
          alt="F Score"
          style={{
            width: '80%',
            height: '80%',
          }}
        />
      </div>
      <img
        src={laptop}
        alt="Laptop"
        className="animate__animated animate__bounceInUp"
        style={{
          position: 'absolute',
          bottom: '22%',
          left: '400px',  // Adjusted to place the laptop to the left of the loserstud image
          width: '230px',
          height: 'auto',
          zIndex: 2,
          animationDelay: '2s',
          animationFillMode: 'both'
        }}
      />
      <img
        src={loserstud}
        alt="Loser Student"
        className="animate__animated animate__bounceInDown"
        style={{
          position: 'absolute',
          bottom: '22%',
          left: '630px',
          width: '230px',
          height: 'auto',
          zIndex: 2,
          animationDelay: '3s',
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
      ></div>
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

export default LoserStud;
