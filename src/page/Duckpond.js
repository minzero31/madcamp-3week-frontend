import React, { useEffect, useRef } from 'react';
import duckImage from '../img/main_pond_duck.png'; // 오리 이미지 경로 설정

const Duckpond = () => {
  const canvasRef = useRef(null);
  const imgRef = useRef(null); // 오리 이미지 ref
  const bubbles = useRef([]); // 버블들의 배열

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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

    const drawBubbles = () => {
      bubbles.current.forEach((bubble, index) => {
        bubble.y -= 1; // 버블 위로 이동
        bubble.radius -= 0.05; // 반지름 줄이기
        bubble.opacity -= 0.01; // 투명도 줄이기

        if (bubble.opacity <= 0) {
          bubbles.current.splice(index, 1); // 버블이 투명해지면 배열에서 제거
        } else {
          ctx.beginPath();
          ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 0, 255, ${bubble.opacity})`; // 파란색 버블
          ctx.fill();
        }
      });

      // 버블 생성
      if (Math.random() > 0.95) { // 일정 확률로 버블 생성
        bubbles.current.push({
          x: Math.random() * canvas.width, // 랜덤한 위치에서 생성
          y: canvas.height + 20, // 화면 아래에서 생성
          radius: Math.random() * 10 + 5, // 랜덤한 반지름
          opacity: 1, // 초기 투명도
        });
      }
    };

    const drawDuck = () => {
      if (imgRef.current) {
        const imgWidth = 200;
        const imgHeight = 150;
        ctx.drawImage(
          imgRef.current,
          canvas.width / 2 - imgWidth / 2,
          canvas.height / 2 - imgHeight / 2,
          imgWidth,
          imgHeight
        );
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground();
      drawBubbles();
      drawDuck();
      requestAnimationFrame(animate);
    };

    const loadImage = () => {
      const img = new Image();
      img.src = duckImage;
      img.onload = () => {
        imgRef.current = img;
        animate();
      };
    };

    loadImage();

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
