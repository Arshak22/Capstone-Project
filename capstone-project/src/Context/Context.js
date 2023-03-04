import { React, createContext, useContext, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loginUser, setLoginUser] = useState(
    {
      email: "",
      password: null,
    }
  )

  const [user, setUser] = useState(
    {
        firstName: "First Name",
        lastName: "Last Name",
        avatar: null,
        email: "-",
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

  const [userFavGenres, setUserFavGenres] = useState([]);

  const [avatar, setAvatar] = useState("");

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
        setIsLoading,
        loginUser,
        setLoginUser,
        avatar,
        setAvatar,
        userFavGenres,
        setUserFavGenres
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