import React, { useEffect } from 'react';

const DuckShape = () => {
  useEffect(() => {
    const canvas = document.getElementById('duckCanvas');
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set background color
    ctx.fillStyle = '#FFFFFF'; // White background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw body (oval shape)
    ctx.beginPath();
    ctx.ellipse(150, 200, 100, 70, 0, 0, Math.PI * 2); // Ellipse for body
    ctx.fillStyle = '#F3D605'; // Yellowish color for body
    ctx.fill();
    ctx.strokeStyle = '#000000'; // Black outline
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    // Draw head (circle)
    ctx.beginPath();
    ctx.arc(100, 150, 40, 0, Math.PI * 2); // Head circle
    ctx.fillStyle = '#FFFFFF'; // White color
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Draw eyes (small circles)
    ctx.beginPath();
    ctx.arc(85, 135, 5, 0, Math.PI * 2); // Left eye
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(115, 135, 5, 0, Math.PI * 2); // Right eye
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();

    // Draw beak (triangle)
    ctx.beginPath();
    ctx.moveTo(90, 145);
    ctx.lineTo(110, 145);
    ctx.lineTo(100, 160);
    ctx.closePath();
    ctx.fillStyle = '#FFD700'; // Yellowish color for beak
    ctx.fill();
  }, []);

  return (
    <div>
      <canvas id="duckCanvas" width="300" height="300" style={{ backgroundColor: '#FFFFFF' }}></canvas>
    </div>
  );
};

export default DuckShape;
