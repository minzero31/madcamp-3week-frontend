import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import computer from "../img/computer.png";
import error from "../img/error.png";
import io from "socket.io-client";
import pond from "../img/pond.png";

// const socket = io("http://172.10.7.127");

const Main = () => {
  // const [bombHolder, setBombHolder] = useState(null);
  // const [isModalOn, setIsModalOn] = useState(true);
  // const [ready, setReady] = useState(0);
  // const bombHolderRef = useRef(null);

  // useEffect(() => {
  //   bombHolderRef.current = bombHolder;
  // }, [bombHolder]);

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log("Connected to server");
  //   });

  //   socket.on("bomb", (bombHolderId) => {
  //     setBombHolder(bombHolderId);
  //     console.log("Bomb is with: ", bombHolderId);
  //   });

  //   socket.on("ready_count", (count) => {
  //     setReady(count);
  //     console.log("Ready count is: ", count);
  //   });

  //   socket.on("limit_time", (limitTime) => {
  //     setTimeout(() => {
  //       if (bombHolderRef.current === socket.id) {
  //         alert("You IDIOT!");
  //       } else {
  //         alert("good");
  //       }
  //     }, limitTime * 1000);
  //   });

  //   // Main 페이지에 진입할 때 서버로 이벤트 전송
  //   socket.emit("enter_game");

  //   return () => {
  //     socket.off("connect");
  //     socket.off("bomb");
  //     socket.off("ready_count");
  //     socket.off("limit_time");
  //   };
  // }, []);

  // const ErrorComputer = () => {
  //   return (
  //     <div style={{ position: "relative" }}>
  //       <img
  //         style={{ width: "280px" }}
  //         onClick={passBomb}
  //         src={computer}
  //         alt="img"
  //       />
  //       <img
  //         style={{
  //           width: "130px",
  //           position: "absolute",
  //           bottom: 100,
  //           left: 68,
  //         }}
  //         src={error}
  //         alt="img"
  //       />
  //     </div>
  //   );
  // };

  // const passBomb = () => {
  //   if (bombHolder === socket.id) {
  //     // 폭탄을 소유한 클라이언트만 폭탄을 전달할 수 있음
  //     socket.emit("pass_bomb");
  //     console.log("Bomb is passed to the other player!");
  //   }
  // };

  // return (
  //   <div
  //     style={{
  //       height: "100vh",
  //       position: "relative",
  //       backgroundColor: "#FFFFFF",
  //     }}
  //   >
  //     <div style={{ display: "flex", justifyContent: "center" }}>
  //       <div
  //         style={{ fontSize: 20, fontWeight: "bolder", backgroundColor: "" }}
  //       >
  //         {bombHolder === socket.id ? "My Turn" : "Your Turn"}
  //       </div>
  //     </div>
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         marginTop: "150px",
  //       }}
  //     >
  //       <img src={pond} alt="img" />
  //     </div>
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         width: "100%",
  //         position: "absolute",
  //         bottom: 20,
  //       }}
  //     >
  //       {bombHolder === socket.id ? (
  //         <ErrorComputer />
  //       ) : (
  //         <img
  //           style={{ width: "280px" }}
  //           onClick={passBomb}
  //           src={computer}
  //           alt="img"
  //         />
  //       )}
  //     </div>
  //     {isModalOn ? (
  //       <div
  //         style={{
  //           zIndex: 1,
  //           backgroundColor: "rgba(102, 100, 100, 0.3)",
  //           width: "100%",
  //           height: "100vh",
  //           position: "fixed",
  //           top: 0,
  //           left: 0,
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <Modal
  //           modalState={{ isModalOn, setIsModalOn }}
  //           readyState={{ ready, setReady }}
  //           socket={socket}
  //         />
  //       </div>
  //     ) : null}
  //   </div>
  // );
};

export default Main;
