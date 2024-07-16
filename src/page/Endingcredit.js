import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EndingCredit = () => {
  const canvasRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = React.useState("");

  useEffect(() => {
    if (location.state && location.state.username) {
      setUser(location.state.username);
    }
  }, [location.state]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const credits = [
      "Producer - ha",
      "Director - haha",
      "Developer - jimini, minzero",
      "Special thanx to : class 4 & GPT",
      "Graphic Designer - hahaha",
      "Sound Engineer - hahahaha",
      "Casting Director - hahahahaha",
      "Camera Operator - hahahahahahahah",
      "WOWOWOW : " + user.state,
      "Prof : ",
      "Student : "
    ];

    const creditPositions = credits.map((credit, index) => ({
      text: credit,
      opacity: 1 - index * 0.1,
      y: canvas.height + index * 30 + 20,
      speed: 2.0,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let allCreditsOffScreen = true;

      creditPositions.forEach((credit, index) => {
        credit.y -= credit.speed;
        ctx.fillStyle = "white"; // Set to white
        ctx.font = "28px Arial";
        ctx.fillText(credit.text, canvas.width / 2 - 200, credit.y);

        if (credit.y > -30) {
          allCreditsOffScreen = false;
        }
      });

      if (allCreditsOffScreen) {
        setTimeout(() => {
          navigate('/login');
        }, 3000); // Navigate to '/login' after 3 seconds
      } else {
        requestAnimationFrame(animate);
      }
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate, user]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
      }}
    />
  );
};

export default EndingCredit;
