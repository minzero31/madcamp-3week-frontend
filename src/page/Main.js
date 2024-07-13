import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import computer from "../img/computer.png";
import io from "socket.io-client";

const socket = io("http://172.10.7.127");

const Main = () => {
  const [bombHolder, setBombHolder] = useState(null);
  const [isModalOn, setIsModalOn] = useState(true);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("bomb", (bombHolderId) => {
      setBombHolder(bombHolderId);
      console.log("Bomb is with: ", bombHolderId);
    });

    return () => {
      socket.off("connect");
      socket.off("bomb");
    };
  }, []);

  const passBomb = () => {
    setBombHolder("other");
    socket.emit("pass_bomb");
    console.log("Bomb is passed to the other player!");
  };

  return (
    <div style={{ backgroundColor: "yellow", height: "100vh" }}>
      <div>Main</div>
      <div>
        {bombHolder === socket.id ? <div>내 차례</div> : <div>네 차례</div>}
      </div>
      <div>
        <div>
          <img style={{ width: "280px" }} onClick={passBomb} src={computer} />
        </div>
        <div>
          <img style={{ width: "280px" }} onClick={passBomb} src={computer} />
        </div>
      </div>
      {isModalOn ? (
        <div
          style={{
            zIndex: 1,
            backgroundColor: "rgba(102, 100, 100, 0.3)",
            width: "100%",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Modal state={{ isModalOn, setIsModalOn }} />
        </div>
      ) : null}
    </div>
  );
};

export default Main;
