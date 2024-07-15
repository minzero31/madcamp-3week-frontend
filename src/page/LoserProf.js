import React from 'react';
import loserprof from '../img/loserprof.png'; // 경로를 실제 이미지 경로에 맞게 조정하세요

const LoserProf = () => {
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
