import React, { useRef, useEffect, useState } from 'react';
import cloudImage from '../img/cloud.png'; // 구름 이미지 경로 설정

const CurtainAnimation = () => {
  const canvasRef = useRef(null);
  const [curtainAnimationComplete, setCurtainAnimationComplete] = useState(false);
  const [cloudImageObj, setCloudImageObj] = useState(null);
  const [cloudLoaded, setCloudLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Canvas 크기를 창 크기에 맞게 설정하는 함수
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawCurtains(); // 커튼 다시 그리기
      drawLines(); // 점들 다시 그리기
      if (cloudLoaded) drawClouds(); // 구름 다시 그리기 (구름 이미지가 로드되었을 때만)
    };

    // 초기 커튼 상태 설정 함수
    let curtainColor = '#9A494F';
    let curtainWidth, curtainHeight;

    // 검정색 점 관련 변수
    let point1X, point2X, point3X, point4X;
    let point1Y, point2Y, point3Y, point4Y;
    const pointGap = 20; // 두 점 사이의 간격

    // 초기 커튼 상태 설정
    const initCurtain = () => {
      curtainWidth = canvas.width / 2;
      curtainHeight = canvas.height;
      point1X = canvas.width / 6; // 첫 번째 점 위치
      point2X = canvas.width / 6 * 4; // 두 번째 점 위치 (첫 번째에서 일정 간격)
      point3X = canvas.width / 6 * 3 - pointGap;
      point4X = canvas.width / 6 * 2 - 40;

      point1Y = 0; // 첫 번째 점 초기 위치 (화면 맨 위)
      point2Y = 0; // 두 번째 점 초기 위치 (화면 맨 위)
      point3Y = 0; // 세 번째 점 초기 위치 (화면 맨 위)
      point4Y = 0; // 네 번째 점 초기 위치 (화면 맨 위)
      
      drawCurtains(); // 초기 커튼 그리기
      drawLines(); // 초기 검정색 점 그리기
    };

    // 커튼을 그리는 함수
    const drawCurtains = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = curtainColor;
      ctx.fillRect(0, 0, curtainWidth, curtainHeight); // 왼쪽 커튼
      ctx.fillRect(canvas.width - curtainWidth, 0, curtainWidth, curtainHeight); // 오른쪽 커튼
    };

    // 검정색 점 그리기 함수
    const drawLines = () => {
      ctx.fillStyle = 'black';

      // 첫 번째 점 그리기
      ctx.beginPath();
      ctx.arc(point1X, point1Y, 1, 0, Math.PI * 2); // 중심 (point1X, point1Y), 반지름 1
      ctx.fill();

      // 두 번째 점 그리기
      ctx.beginPath();
      ctx.arc(point2X, point2Y, 1, 0, Math.PI * 2); // 중심 (point2X, point2Y), 반지름 1
      ctx.fill();

      // 세 번째 점 그리기
      ctx.beginPath();
      ctx.arc(point3X, point3Y, 1, 0, Math.PI * 2); // 중심 (point3X, point3Y), 반지름 1
      ctx.fill();

      // 네 번째 점 그리기
      ctx.beginPath();
      ctx.arc(point4X, point4Y, 1, 0, Math.PI * 2); // 중심 (point4X, point4Y), 반지름 1
      ctx.fill();
    };

    // 구름 그리기 함수
    const drawClouds = () => {
      if (cloudImageObj) {
        // 구름 이미지가 로드되었으면
        ctx.drawImage(cloudImageObj, point1X - 20, canvas.height - cloudImageObj.height);
        ctx.drawImage(cloudImageObj, point2X - 20, canvas.height - cloudImageObj.height);
      }
    };

    // 검정색 점 애니메이션 함수
    const animateLines = () => {
      const descentSpeed = 1; // 점이 내려가는 속도

      if (point1Y < curtainHeight / 7) {
        point1Y += descentSpeed;
        point2Y += descentSpeed;
        point3Y += descentSpeed;
        point4Y += descentSpeed;
        drawLines();
        requestAnimationFrame(animateLines);
      } else {
        setTimeout(() => {
          loadCloudImage(); // 1초 후에 구름 이미지 로드
        }, 1000);
      }
    };

    // 구름 이미지 로드 함수
    const loadCloudImage = () => {
      const img = new Image();
      img.onload = () => {
        setCloudImageObj(img);
        setCloudLoaded(true);
        drawClouds(); // 이미지 로드 후에 구름 그리기
      };
      img.src = cloudImage;
    };

    // 애니메이션 시작 함수
    const startAnimation = () => {
      animateCurtain(); // 커튼 애니메이션 시작
    };

    // 커튼 애니메이션 함수
    const animateCurtain = () => {
      if (curtainWidth > 0) {
        curtainWidth -= 4; // 커튼 폭을 각 프레임마다 4씩 줄임
        drawCurtains();
        requestAnimationFrame(animateCurtain);
      } else {
        setCurtainAnimationComplete(true); // 커튼 애니메이션 완료 후 플래그 설정
        animateLines(); // 검정색 점 애니메이션 시작
      }
    };

    // 초기화 및 애니메이션 시작
    initCurtain();
    startAnimation();

    // 리사이즈 이벤트 핸들러 추가 및 제거
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Canvas 요소 반환
  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default CurtainAnimation;
