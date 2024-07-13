import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Errortologin = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [expand, setExpand] = useState(false);
  const boxRef = useRef(null);

  const messages = [
    "ERROR: your git repository is gone..entirely...",
    "Warning..............",
    "404 Error: Brain not found. Please reboot.",
    "Emergency:uhahahahahahhahahahahahahhahaha",
    "Spaghetti code detected. Proceed with caution."
  ];

  useEffect(() => {
    const blinkSequence = async () => {
      for (let i = 0; i < 2; i++) {
        setIsVisible(false);
        await new Promise((resolve) => setTimeout(resolve, 100));
        setIsVisible(true);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsVisible(false);
      await new Promise((resolve) => setTimeout(resolve, 100));
      setIsVisible(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setExpand(true);
    };

    blinkSequence();
  }, []);

  useEffect(() => {
    if (expand) {
      const box = boxRef.current;
      let scale = 1;
      const expandAnimation = () => {
        scale += 1.0; // 확대 비율을 더 크게 설정
        box.style.transform = `translate(-50%, -50%) scale(${scale})`;
        box.style.opacity = `${Math.max(1 - scale / 50, 0)}`; // 글씨 점점 투명하게
        if (scale < 200) { // 확대 시간을 늘리기 위해 상한선을 높게 설정
          requestAnimationFrame(expandAnimation);
          navigate('/login');
        }
      };
      expandAnimation();
    }
  }, [expand, navigate]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(128, 128, 128, 0.8)', // 옅은 회색 배경
        overflow: 'hidden', // 확대 효과 시 넘침 방지
      }}
    >
      <div
        ref={boxRef}
        style={{
          backgroundColor: 'black', // 검정색 배경
          color: 'red',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          visibility: isVisible ? 'visible' : 'hidden', // 깜빡거림 효과
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
        }}
      >
        {messages.map((message, index) => (
          <div key={index} className="error-message" style={{ margin: '10px' }}>
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Errortologin;