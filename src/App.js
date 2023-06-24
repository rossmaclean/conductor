import { useEffect, useState } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    const canvas = document.querySelector(".myCanvas");
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
    const ctx = canvas.getContext("2d");

    drawRoute1(ctx);
  }, []);

  const drawRoute1 = (ctx) => {
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(300, 100);
    ctx.lineTo(300, 200);
    ctx.lineTo(100, 200);
    ctx.lineTo(100, 100);
    ctx.stroke();
  }

  return (
    <div>
      <canvas className="myCanvas">
        <p>Add suitable fallback here.</p>
      </canvas>
    </div>
  );
}

export default App;
