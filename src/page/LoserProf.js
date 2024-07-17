import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loserprof from '../img/loserprof.jpg'; // 경로를 실제 이미지 경로에 맞게 조정하세요

const LoserProf = () => {
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

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <img src={loserprof} alt="loser Prof" style={styles.image} />
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

export default LoserProf;
