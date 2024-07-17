import React, { useContext, useEffect, useState } from "react";
import waitingLineLeft from "../img/waitingLineLeft.png";
import waitingLineRight from "../img/waitingLineRight.png";
import entrance from "../img/entrance.png";
import { Context } from "../AppProvider";
import { useNavigate } from "react-router-dom";

const Waiting = () => {
  const navigate = useNavigate();
  const { state, setState, socket } = useContext(Context);
  const [readyCount, setReadyCount] = useState(0);

  useEffect(() => {
    socket.on("ready_count_updated", (data) => {
      setReadyCount(data.ready_count);
    });
  }, []);

  const handleEntranceClick = () => {
    socket.emit("ready_clicked", { roomOwner: state.roomOwner });
  };

  useEffect(() => {
    if (readyCount === 2) {
      setTimeout(() => {
        navigate("/curtain");
      }, 3000);
    }
  });

  return (
    <div
      class="animate__animated animate__fadeIn"
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        gap: "183px", // 550px / 3
        position: "relative",
      }}
    >
      {/* 그라데이션을 적용할 div */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(to bottom, black, #F1D7B6)", // 그라데이션 색상
          height: "500px", // 1500px / 3
          zIndex: -2,
        }}
      ></div>
      <div style={{ paddingTop: "317px", zIndex: 1 }}>
        {" "}
        {/* 950px / 3 */}
        <img
          src={waitingLineLeft}
          style={{ height: "110%" }}
          alt="Waiting Line Left"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "90px", // 270px / 3
          zIndex: 1,
          borderRadius: 20,
        }}
      >
        <img
          src={entrance}
          style={{ width: "100px", cursor: "pointer" }} // 300px / 3
          alt="entrance"
          onClick={handleEntranceClick}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "187px", // 560px / 3
          height: "200px", // 600px / 3
          backgroundColor: "black",
          width: "167px", // 500px / 3
          zIndex: 1,
          borderRadius: 15,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "133px", // 400px / 3
          height: "43px", // 130px / 3
          backgroundColor: "white",
          width: "167px", // 500px / 3
          zIndex: 1,
          borderRadius: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "18px", fontWeight: "bold", color: "#525252" }}>
          {" "}
          {/* 55px / 3 */}
          Ready {readyCount}/2
        </div>
      </div>
      <div style={{ paddingTop: "317px", zIndex: 1 }}>
        {" "}
        {/* 950px / 3 */}
        <img
          src={waitingLineRight}
          style={{ height: "110%" }}
          alt="Waiting Line Right"
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "black",
          height: "357px", // 1070px / 3
          width: "100%",
          zIndex: -1,
        }}
      ></div>
    </div>
  );
};

export default Waiting;
