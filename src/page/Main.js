import React, { useState } from "react";
import Modal from "./Modal";

const Main = () => {
  const [isModalOn, setIsModalOn] = useState(true);
  return (
    <div style={{ backgroundColor: "yellow", height: "100vh" }}>
      <div>Main</div>
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
