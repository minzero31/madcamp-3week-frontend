import React, { useEffect, useRef } from 'react';
import duckImage from '../img/main_pond_duck.png'; // 오리 이미지 경로 설정

const Duckpond = () => {
  const canvasRef = useRef(null);
  const imgRefs = useRef([null, null]); // 두 개의 오리 이미지를 담는 배열

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const waves = [
      { // 첫 번째 오리 파동
        x: canvas.width * 0.25,
        y: canvas.height / 2,
        radius: 0,
        opacity: 1,
        maxRadius: 200,
        speed: 2,
        waveFrequency: 1000, // 파동 생성 주기 (밀리초)
        lastWaveTime: 0,
      },
      { // 두 번째 오리 파동
        x: canvas.width * 0.75,
        y: canvas.height / 2,
        radius: 0,
        opacity: 1,
        maxRadius: 200,
        speed: 2.5,
        waveFrequency: 1200, // 파동 생성 주기 (밀리초)
        lastWaveTime: 0,
      }
    ];

    const drawBackground = () => {
      ctx.fillStyle = '#FFFFFF'; // 흰 배경
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = '#D2F7FF'; // 하늘색 타원
      ctx.ellipse(canvas.width / 2, canvas.height / 2, canvas.width * 0.6, canvas.height * 0.4, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const createWave = (wave) => {
      wave.waveFrequency = Math.random() * 300 + 800; // 파동 생성 주기를 랜덤으로 설정
      wave.lastWaveTime = 0; // 마지막 파동 시간 초기화
      wave.radius = 0; // 파동 반지름 초기화
      wave.opacity = 1; // 파동 투명도 초기화
    };

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground();

      waves.forEach((wave) => {
        if (Date.now() - wave.lastWaveTime > wave.waveFrequency) {
          createWave(wave);
          wave.lastWaveTime = Date.now();
        }

        if (wave.radius > wave.maxRadius) {
          wave.opacity -= 0.02;
          if (wave.opacity <= 0) {
            wave.opacity = 0;
          }
        } else {
          wave.radius += wave.speed;
        }

        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = `rgba(55, 129, 170, ${wave.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      imgRefs.current.forEach((imgRef, index) => {
        const imgWidth = 100;
        const imgHeight = 100;
        ctx.drawImage(
          imgRef,
          waves[index].x - imgWidth / 2,
          waves[index].y - imgHeight / 2,
          imgWidth,
          imgHeight
        );
      });
    };

    const animate = () => {
      drawWaves();
      requestAnimationFrame(animate);
    };

    imgRefs.current = imgRefs.current.map((_, index) => {
      const img = new Image();
      img.src = duckImage;
      img.onload = () => {
        imgRefs.current[index] = img;
        if (index === imgRefs.current.length - 1) {
          animate();
        }
      };
      return img;
    });

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    />
  );
};

export default Duckpond;
