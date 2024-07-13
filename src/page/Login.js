import React, { useContext } from "react";
import { Context } from "../AppProvider";
import { useNavigate } from "react-router-dom";
import doodle from "../img/doodle.png";

const Login = () => {
  const { state, setState } = useContext(Context);
  const navigate = useNavigate();

  const onClickHandler = () => {
    alert(state.username);
    navigate("/main");
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${doodle})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style>
        {`
          input::placeholder {
            color: white;
            text-align: center;
          }
        `}
      </style>
      <div
        style={{
          marginTop: "300px",
          display: "flex",
          height: "130px",
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            width: "40px",
            height: "130px",
            borderRadius: "20px",
            marginRight: "220px",
          }}
        >
          .
        </div>
        <div
          style={{
            backgroundColor: "black",
            width: "40px",
            height: "130px",
            borderRadius: "20px",
            marginLeft: "220px",
          }}
        >
          .
        </div>
      </div>
      <div style={{ marginTop: "50px", marginBottom: "1px" }}>
        <input
          style={{
            border: "none",
            borderRadius: "20px",
            backgroundColor: "#FFBD00",
            width: "200px",
            height: "20px",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingRight: "65px",
            paddingLeft: "65px",
            fontSize: "15px",
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
          }}
          value={state.username}
          onChange={(e) => setState({ ...state, username: e.target.value })}
          placeholder="Enter your name"
        />
      </div>
      <button
        style={{
          border: "none",
          backgroundColor: "#FFBD00",
          borderRadius: "20px",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingRight: "100px",
          paddingLeft: "100px",
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
        }}
        onClick={() => onClickHandler()}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
