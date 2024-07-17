import React, { useContext, useEffect, useState } from "react";
import { TbDoorEnter } from "react-icons/tb";
import stage from "../img/stage.png";
import duck from "../img/duck.png";
import { useNavigate } from "react-router-dom";
import { Context } from "../AppProvider";

const Ready = () => {
  const { state, setState, socket } = useContext(Context);
  const navigate = useNavigate();
  const [isAnimationApplied, setIsAnimationApplied] = useState(false);
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("room_list_updated", (data) => {
      setRoomList(data.room_list);
    });

    socket.on("join_room_success", (data) => {
      console.log(`Successfully joined ${data.roomName}'s room`);
      // Navigate to the game screen or perform other actions
      navigate("/flipbook"); // Change '/game' to your game screen route
    });

    socket.on("join_room_failed", (data) => {
      alert(data.message);
    });

    // When the component mounts, request the current room list
    socket.emit("get_room_list");
  }, []);

  const createNewRoom = () => {
    setState({ ...state, roomOwner: state.username });
    socket.emit("create_room", {
      username: state.username,
      ownerSid: state.sid,
    });
    navigate("/flipbook");
  };

  const joinRoom = (roomName) => {
    setState({ ...state, roomOwner: roomName });
    socket.emit("join_room", {
      roomName,
      username: state.username,
      guestSid: state.sid,
    });
    // Implement navigation or other actions after joining a room if needed
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationApplied(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const RoomList = ({ name }) => {
    return (
      <div
        style={{
          backgroundColor: "white",
          width: "350px",
          height: "50px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          border: "3px solid black",
          position: "relative",
        }}
      >
        <div
          style={{
            fontFamily: "Alice, sans-serif",
            paddingLeft: "15px",
            fontWeight: "bold",
          }}
        >
          {name} 's room
        </div>
        <div
          style={{ position: "absolute", right: 20, cursor: "pointer" }}
          onClick={() => {
            joinRoom(name);
          }}
        >
          <TbDoorEnter size={"25"} />
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <div
        class="animate__animated animate__fadeIn"
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "black",
          zIndex: 1,
        }}
      >
        <div
          class="animate__animated animate__bounceInDown"
          style={{
            position: "absolute",
            left: "1050px",
            top: "-65px",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", gap: "37px", paddingLeft: "33px" }}>
            <div
              style={{
                backgroundColor: "black",
                height: "300px",
                width: "3px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                height: "359px",
                width: "3px",
              }}
            ></div>
          </div>
          <img
            src={duck}
            alt="duck"
            style={{
              width: "110px",
              position: "absolute",
              top: "300px",
            }}
          />
        </div>
        {isAnimationApplied ? (
          <>
            <div
              class="animate__animated animate__bounceInDown"
              style={{
                position: "absolute",
                left: "1200px",
                zIndex: 2,
              }}
            >
              <div
                style={{ display: "flex", gap: "25px", paddingLeft: "10px" }}
              >
                <div
                  style={{
                    backgroundColor: "black",
                    height: "306px",
                    width: "3px",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "black",
                    height: "357px",
                    width: "3px",
                  }}
                ></div>
              </div>
              <img
                src={duck}
                alt="duck"
                style={{
                  width: "55px",
                  position: "absolute",
                  top: "300px",
                }}
              />
            </div>
            <div
              class="animate__animated animate__bounceInDown"
              style={{
                position: "absolute",
                left: "1260px",
                zIndex: 2,
              }}
            >
              <div
                style={{ display: "flex", gap: "25px", paddingLeft: "10px" }}
              >
                <div
                  style={{
                    backgroundColor: "black",
                    height: "306px",
                    width: "3px",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "black",
                    height: "357px",
                    width: "3px",
                  }}
                ></div>
              </div>
              <img
                src={duck}
                alt="duck"
                style={{
                  width: "55px",
                  position: "absolute",
                  top: "300px",
                }}
              />
            </div>{" "}
          </>
        ) : null}

        <div
          style={{
            backgroundImage: `url(${stage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "blur(8px)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        ></div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "35px",
            fontFamily: "Alice, sans-serif",
            paddingTop: "20px",
            paddingLeft: "45px",
            paddingBottom: "25px",
            position: "relative",
            zIndex: 1,
            color: "white",
          }}
        >
          Game Lobby
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: "50px",
            paddingLeft: "350px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              backgroundColor: "#F5F5DC",
              borderRadius: "10px",
              border: "3px solid black",
              boxShadow: "5px 5px 5px 5px #888888",
            }}
          >
            <div
              style={{
                width: "400px",
                height: "500px",
                paddingTop: "15px",
                justifyContent: "center",
                paddingLeft: "20px",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: "Alice, sans-serif",
                  paddingBottom: "35px",
                  paddingLeft: "10px",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                Enter the room
              </div>
              <hr
                style={{
                  backgroundColor: "black",
                  position: "absolute",
                  height: "3px",
                  width: "380px",
                  top: "50px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  borderRadius: "20px",
                  flexDirection: "column",
                  backgroundColor: "#FBFCFC",
                  border: "3px solid black",
                  paddingLeft: "15px",
                  paddingTop: "20px",
                  marginRight: "18px",
                  height: "380px",
                }}
              >
                {roomList.length !== 0 ? (
                  roomList.map((room_name) => {
                    return <RoomList name={room_name} />;
                  })
                ) : (
                  <div
                    style={{
                      display: "flex",
                      fontFamily: "Alice, sans-serif",
                      fontWeight: "bold",
                      fontSize: "25px",
                      paddingLeft: "70px",
                      paddingTop: "150px",
                    }}
                  >
                    No room created...
                  </div>
                )}
              </div>
            </div>
          </div>
          <div style={{ paddingLeft: "150px", paddingTop: "130px" }}>
            <div
              style={{
                backgroundColor: "#C77140",
                height: "180px",
                position: "absolute",
                right: "0",
                width: "600px",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)",
                boxShadow: "5px 5px 5px 5px #888888",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "-50px",
                  width: "15%",
                  height: "265px",
                  borderRight: "5px solid #A15B33",
                  transform: "rotate(-30deg)",
                  transformOrigin: "top left",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "10px",
                  width: "15%",
                  height: "265px",
                  borderRight: "5px solid #A15B33",
                  transform: "rotate(-30deg)",
                  transformOrigin: "top left",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "70px",
                  width: "15%",
                  height: "265px",
                  borderRight: "5px solid #A15B33",
                  transform: "rotate(-30deg)",
                  transformOrigin: "top left",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "130px",
                  width: "15%",
                  height: "265px",
                  borderRight: "5px solid #A15B33",
                  transform: "rotate(-30deg)",
                  transformOrigin: "top left",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "180px",
                  width: "15%",
                  height: "265px",
                  borderRight: "5px solid #A15B33",
                  transform: "rotate(-30deg)",
                  transformOrigin: "top left",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "240px",
                  width: "15%",
                  height: "265px",
                  borderRight: "5px solid #A15B33",
                  transform: "rotate(-30deg)",
                  transformOrigin: "top left",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "300px",
                  width: "15%",
                  height: "265px",
                  borderRight: "5px solid #A15B33",
                  transform: "rotate(-30deg)",
                  transformOrigin: "top left",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "360px",
                  width: "15%",
                  height: "265px",
                  borderRight: "5px solid #A15B33",
                  transform: "rotate(-30deg)",
                  transformOrigin: "top left",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "420px",
                  width: "15%",
                  height: "265px",
                  borderRight: "5px solid #A15B33",
                  transform: "rotate(-30deg)",
                  transformOrigin: "top left",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "480px",
                  width: "15%",
                  height: "265px",
                  borderRight: "5px solid #A15B33",
                  transform: "rotate(-30deg)",
                  transformOrigin: "top left",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            left: "1300px",
            bottom: "80px",
          }}
        >
          <button
            style={{
              width: "135px",
              height: "50px",
              fontSize: "18px",
              borderRadius: "10px",
              fontWeight: "bold",
              fontFamily: "Alice, sans-serif",
              border: "3px solid black",
            }}
            onClick={createNewRoom}
          >
            Create New
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ready;
