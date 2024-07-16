import React, { createContext, useEffect, useState } from "react";
import socket from "./socket";

export const Context = createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    username: "",
    userColleague: "",
    roomOwner: "",
    sid: "",
  });

  useEffect(() => {
    socket.on("receive_sid", (data) => {
      setState((prevState) => ({ ...prevState, sid: data.sid }));
    });
  }, []);

  return (
    <Context.Provider value={{ state, setState, socket }}>
      {children}
    </Context.Provider>
  );
};

export default AppProvider;
