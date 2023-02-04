import { React, createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(
    {
        email: null,
        password: null
    }
  );

  const [newUser, setNewUser] = useState(
    {
        username: null,
        email: null,
        password: null,
        confirmPassword: null
    }
  );

  const [castPopUpOpen, setCastPopUpOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        newUser,
        setNewUser,
        castPopUpOpen,
        setCastPopUpOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };