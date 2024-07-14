import React, { createContext, useState } from "react";

export const Context = createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    username: "",
    userColleague: "",
  });

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};

export default AppProvider;
