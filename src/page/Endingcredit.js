import React, { useContext, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../AppProvider";

const EndingCredit = () => {
  const { state, setState, socket } = useContext(Context);
  const canvasRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  let index;
  if (state.username === state.roomOwner) {
    index = 0;
  } else {
    index = 1;
  }

  const [user, setUser] = React.useState("");

  useEffect(() => {
    const audio = new Audio("/endingmusic.mp3");
    audio.play();

    return () => {
      audio.pause();
    };
  }, []);

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
      "Title - Casting",
      "Producer - minzero",
      "Director - jimini",
      "Developer - jimini, minzero",
      "Special thanx to : class 4 & GPT",
      "Graphic Designer - ah i want to go home",
      "Sound Engineer - mp3",
      "Casting Director - Dad and I",
      "Memo : I MISS YOU MOM",
      "Shout to my dog - I love you",
      `Prof :  ${index === 1 ? state.username : "opponent"}`,
      `Student : ${index === 0 ? state.username : "opponent"}`,
    ];

    const creditPositions = credits.map((credit, index) => ({
      text: credit,
      opacity: 1 - index * 0.1,
      y: canvas.height + index * 30 + 20,
      speed: 1.5,
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
          navigate("/login");
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
