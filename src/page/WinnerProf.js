import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import winnerprof from '../img/winnerprof.png'; // 경로를 실제 이미지 경로에 맞게 조정하세요

const WinnerProf = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const audio = new Audio("/winnermusic.mp3");
    audio.play();

    const fadeOutAudio = () => {
      let volume = 1.0; // 시작 볼륨
      const fadeInterval = setInterval(() => {
        if (volume > 0.1) {
          volume -= 0.1;
          audio.volume = volume;
        } else {
          audio.volume = 0;
          clearInterval(fadeInterval);
          audio.pause();
          navigate('/endingcredit'); // 엔딩 크레딧 화면으로 이동
        }
      }, 200); // 200ms마다 볼륨을 줄입니다.
    };

    const timer = setTimeout(() => {
      fadeOutAudio();
    }, 20000); // 20초 후에 페이드 아웃 시작

    return () => {
      clearTimeout(timer);
      audio.pause();
    };
  }, [navigate]);

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <img src={winnerprof} alt="Winner Prof" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'white', // 전체 창 배경색을 흰색으로 설정
  },
  box: {
    width: '850px', // 사각형의 너비
    height: '600px', // 사각형의 높이
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '800px', // 이미지의 너비 (사각형보다 작게)
    height: '650px', // 이미지의 높이 (사각형보다 작게)
    objectFit: 'contain',
  },
};

export default WinnerProf;
