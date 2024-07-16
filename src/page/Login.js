import React, { useContext, useEffect, useState } from "react";
import { Context } from "../AppProvider";
import { useNavigate } from "react-router-dom";
import Ticket from "./Ticket";
import { FaScissors } from "react-icons/fa6";
import loginDuck from "../img/loginDuck.png";
import loginStudent from "../img/loginStudent.png";
import loginProfessor from "../img/loginProfessor.png";
import loginUser from "../img/loginUser.png";
import "animate.css";

const Login = () => {
  const navigate = useNavigate();
  const { state, setState } = useContext(Context);
  const [click, setClick] = useState(false);
  const [isHovered, setIsHovered] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate("/ready");
    }
  };

  const handleMouseEnter = (index) => {
    const copy = [...isHovered];
    copy[index] = true;
    setIsHovered(copy);
  };

  const handleMouseLeave = (index) => {
    const copy = [...isHovered];
    copy[index] = false;
    setIsHovered(copy);
  };
  // const navigate = useNavigate();

  // const onClickHandler = () => {
  //   alert(state.username);
  //   navigate("/main");
  // };
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", padding: "20px", gap: "50px" }}>
          <div
            className={
              isHovered[0] ? "animate__animated animate__backOutLeft" : ""
            }
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <Ticket />
          </div>
          <div
            className={
              isHovered[1] ? "animate__animated animate__backOutRight" : ""
            }
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <Ticket />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <FaScissors
            size={"25px"}
            style={{ position: "relative", zIndex: 1 }}
          />
          <div
            style={{
              borderTop: "5px dotted black",
              width: "100%",
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translateY(-50%)",
              zIndex: 0,
            }}
          ></div>
        </div>
        <div style={{ display: "flex", padding: "20px", gap: "50px" }}>
          <div
            className={isHovered[2] ? "animate__animated animate__bounce" : ""}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            onClick={() => {
              setClick(true);
            }}
          >
            <Ticket />
          </div>
          <div
            className={
              isHovered[3] ? "animate__animated animate__backOutRight" : ""
            }
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
          >
            <Ticket />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            width: "100%",
            justifyContent: "flex-end", // 오른쪽 정렬
          }}
        >
          <div
            style={{
              borderTop: "5px dotted black",
              width: "100%",
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translateY(-50%)",
              zIndex: 0,
            }}
          ></div>
          <FaScissors
            size={"25px"}
            style={{
              position: "relative",
              zIndex: 1,
              transform: "rotate(180deg)",
            }}
          />
        </div>
        <div style={{ display: "flex", padding: "20px", gap: "50px" }}>
          <div
            className={
              isHovered[4] ? "animate__animated animate__backOutLeft" : ""
            }
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={() => handleMouseLeave(4)}
          >
            <Ticket />
          </div>
          <div
            className={
              isHovered[5] ? "animate__animated animate__backOutRight" : ""
            }
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={() => handleMouseLeave(5)}
          >
            <Ticket />
          </div>
        </div>
      </div>
      {click ? (
        <div
          className="animate__animated animate__fadeIn"
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
          <div
            style={{
              width: "450px",
              height: "650px",
              backgroundColor: "#F5F5DC",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                height: "8px",
                width: "90%",
                position: "absolute",
                top: 20,
              }}
            ></div>
            <div
              style={{
                display: "flex",
                height: "100%",
                width: "100%",
                paddingTop: "20px ",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  height: "96%",
                  backgroundColor: "black",
                  width: "8px",
                }}
              ></div>
              <div style={{ width: "87%" }}>
                <div
                  style={{
                    fontFamily: "Prata, serif",
                    fontSize: "40px",
                    fontWeight: "bold",
                    letterSpacing: "3px",
                    textAlign: "center",
                    paddingTop: "15px",
                  }}
                >
                  Movie Night
                </div>
                <div
                  style={{
                    fontFamily: "Alice, sans-serif",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  CAST BOARD
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "19px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ width: "120px" }}>
                      <div
                        style={{
                          backgroundColor: "white",
                          height: "135px",
                          border: "3px solid black",
                          position: "relative",
                          justifyContent: "center", // 수평 중앙 정렬
                          alignItems: "flex-end", // 수직 아래 정렬
                        }}
                      >
                        <img
                          src={loginUser}
                          alt="loginUser"
                          style={{
                            position: "absolute",
                            left: "0px",
                            width: "120px",
                            height: "80%",
                            objectFit: "cover",
                          }}
                        />
                        <div style={{ position: "absolute", bottom: 5 }}>
                          <input
                            placeholder="Write your Colleague"
                            style={{
                              border: "none",
                              textAlign: "center",
                              width: "110px",
                              backgroundColor: "transparent",
                              outline: "none",
                              fontFamily: "Alice, sans-serif",
                              fontWeight: "bold",
                              fontSize: "11px",
                            }}
                            value={state.userColleague}
                            onChange={(e) => {
                              setState({
                                ...state,
                                userColleague: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          fontFamily: "Alice, sans-serif",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        <input
                          placeholder="Write your Name"
                          style={{
                            border: "none",
                            textAlign: "center",
                            width: "110px",
                            backgroundColor: "transparent",
                            outline: "none",
                            fontFamily: "Alice, sans-serif",
                            fontWeight: "bold",
                          }}
                          value={state.username}
                          onChange={(e) => {
                            setState({ ...state, username: e.target.value });
                          }}
                          onKeyPress={handleKeyPress}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "50px",
                    }}
                  >
                    <div style={{ width: "120px" }}>
                      <div
                        style={{
                          backgroundColor: "white",
                          height: "125px",
                          border: "3px solid black",
                          display: "flex",
                          justifyContent: "center", // 수평 중앙 정렬
                          alignItems: "flex-end", // 수직 아래 정렬
                        }}
                      >
                        <img
                          src={loginProfessor}
                          alt="loginProfessor"
                          style={{
                            width: "80%",
                            height: "80%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          fontFamily: "Alice, sans-serif",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        Professor
                      </div>
                    </div>
                    <div style={{ width: "120px" }}>
                      <div
                        style={{
                          backgroundColor: "white",
                          height: "125px",
                          border: "3px solid black",
                          display: "flex",
                          justifyContent: "center", // 수평 중앙 정렬
                          alignItems: "flex-end", // 수직 아래 정렬
                        }}
                      >
                        <img
                          src={loginStudent}
                          alt="loginStudent"
                          style={{
                            width: "80%",
                            height: "80%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          fontFamily: "Alice, sans-serif",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        Student
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "50px",
                    }}
                  >
                    <div style={{ width: "120px" }}>
                      <div
                        style={{
                          backgroundColor: "white",
                          height: "125px",
                          border: "3px solid black",
                          display: "flex",
                          alignItems: "flex-end", // 수직 아래 정렬
                          position: "relative",
                        }}
                      >
                        <img
                          src={loginDuck}
                          alt="loginProfessor"
                          style={{
                            position: "absolute",
                            left: "0px",
                            width: "120px",
                            height: "80%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          fontFamily: "Alice, sans-serif",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        Kaist Goose 1
                      </div>
                    </div>
                    <div style={{ width: "120px" }}>
                      <div
                        style={{
                          backgroundColor: "white",
                          height: "125px",
                          border: "3px solid black",
                          display: "flex",
                          alignItems: "flex-end", // 수직 아래 정렬
                          position: "relative",
                        }}
                      >
                        <img
                          src={loginDuck}
                          alt="loginProfessor"
                          style={{
                            position: "absolute",
                            left: "0px",
                            width: "120px",
                            height: "80%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          fontFamily: "Alice, sans-serif",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        Kaist Goose 2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  height: "96%",
                  backgroundColor: "black",
                  width: "8px",
                }}
              ></div>
            </div>
            <div
              style={{
                backgroundColor: "black",
                height: "8px",
                width: "90%",
                position: "absolute",
                bottom: 20,
              }}
            ></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Login;
