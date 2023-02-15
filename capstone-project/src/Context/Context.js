import { React, createContext, useContext, useState } from "react";
import DefaultUser from "../assets/images/Icons/DefaultUser.jpg";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(
    {
        firstName: "First Name",
        lastName: "Last Name",
        avatar: DefaultUser,
        email: "-",
        password: null,

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
        setCastPopUpOpen,
        isLoading,
        setIsLoading
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