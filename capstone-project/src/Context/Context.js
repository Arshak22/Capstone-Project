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

  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        newUser,
        setNewUser,
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