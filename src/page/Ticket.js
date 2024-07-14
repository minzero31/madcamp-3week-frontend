import React from "react";
import barcode from "../img/barcode.png";

const Ticket = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#F5F5DC",
        width: "500px",
        borderRadius: "20px",
        border: "3px solid black",
        alignItems: "center",
        height: "165px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingRight: "60px",
          paddingLeft: "60px",
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <div style={{ fontFamily: "Alice, sans-serif" }}>
          based on true story
        </div>
        <div
          style={{
            fontFamily: "Prata, serif",
            fontSize: "35px",
            paddingTop: "15px",
            paddingBottom: "15px",
            fontWeight: "bold",
            letterSpacing: "3px",
          }}
        >
          Movie Night
        </div>
        <div style={{ fontFamily: "Alice, sans-serif" }}>Valid Until</div>
        <div
          style={{
            fontWeight: "bolder",
            paddingTop: "2px",
            fontFamily: "Alice, sans-serif",
          }}
        >
          15 Februrary, 2025
        </div>
      </div>
      <div style={{ height: "100%", width: "3px", borderLeftStyle: "dotted" }}>
        .
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          paddingLeft: "30px",
        }}
      >
        <img src={barcode} alt="barcode" style={{ height: "90%" }} />
      </div>
    </div>
  );
};

export default Ticket;
