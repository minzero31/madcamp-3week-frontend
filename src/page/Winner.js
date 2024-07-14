import React, { useEffect } from 'react';
import Confetti from 'canvas-confetti';

const Winner = () => {
  useEffect(() => {
    // 컨페티 효과를 4초마다 한 번씩 터지도록 설정
    const interval = setInterval(() => {
      Confetti({
        particleCount: 130,
        spread: 130,
        origin: { y: 0.5 } // 화면 높이의 중앙에 위치
      });
    }, 4000);

    // 3번 반복 후 clearInterval을 통해 interval을 정리
    setTimeout(() => {
      clearInterval(interval);
    }, 12000); // 4초 간격으로 3번 반복 (4초 * 3번 = 12초)

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 clearInterval
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div style={{ width: '200px', height: '70px', border:'4px solid black', backgroundColor: 'white', position: 'absolute', bottom: '50px', left: 'calc(50% - 100px)' }}>
        {/* 갈색 박스 */}
      </div>
      <div style={{ position: 'absolute', bottom: '20px', left: 'calc(50% - 150px)', width: '300px', height: '50px', backgroundColor: 'black' }}>
        {/* 검정색 박스 */}
      </div>
      <div style={{ width: '250px', height: '300px', border: '4px solid black', backgroundColor: 'beige', position: 'absolute', right: '300px', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* 네모난 박스 */}
        <div style={{ color: 'black', fontSize: '30px', marginTop: '20px' }}>성적표</div>
        <div style={{ color: 'blue', fontSize: '90px', fontWeight: 'bold', marginTop: 'auto', marginBottom: 'auto' }}>A+</div>
        <div style={{ color: 'black', fontSize: '20px', marginBottom: '20px' }}>00대학교</div>
      </div>
      <div style={{ position: 'absolute', bottom: '10px', left: '0', width: '100%', height: '2px', backgroundColor: 'black' }}>
        {/* 검정색 가로선 */}
      </div>
    </div>
  );
};

export default Winner;
