import React, { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();

export const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(false)
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || null
  );

  const updateUser = (data) => {
    return setCurrentUser(data);
  };

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <Context.Provider value={{ currentUser, updateUser, loader, setLoader }}>
      {children}
    </Context.Provider>
  );
};

export const verifyAuth = () => {
  return useContext(Context);
};
