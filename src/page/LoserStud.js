import React, { useEffect, useRef } from 'react';

const Loser = () => {
  const canvasRef = useRef(null);

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
      <div style={{ width: '200px', height: '70px', border:'4px solid black', backgroundColor: 'white', position: 'absolute', bottom: '50px', left: 'calc(50% - 100px)' }}>
        {/* 갈색 박스 */}
      </div>
      <div style={{ position: 'absolute', bottom: '20px', left: 'calc(50% - 150px)', width: '300px', height: '50px', backgroundColor: 'black' }}>
        {/* 검정색 박스 */}
      </div>
      <div style={{ width: '250px', height: '300px', border: '4px solid black', backgroundColor: 'beige', position: 'absolute', right: '300px', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* 네모난 박스 */}
        <div style={{ color: 'black', fontSize: '30px', marginTop: '20px' }}>성적표</div>
        <div style={{ color: 'red', fontSize: '90px', fontWeight: 'bold', marginTop: 'auto', marginBottom: 'auto' }}>F</div>
        <div style={{ color: 'black', fontSize: '20px', marginBottom: '20px' }}>00대학교</div>
      </div>
      <div style={{ position: 'absolute', bottom: '10px', left: '0', width: '100%', height: '2px', backgroundColor: 'black' }}>
        {/* 검정색 가로선 */}
      </div>
    </div>
  );
};

export default Loser;
