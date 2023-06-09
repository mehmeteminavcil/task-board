import { createContext, useReducer } from "react";

import AuthReducer from "./AuthReducer";

const INITAL_STATE = {
  user: {
    _id: "6437a24a09f6f684ef43539d",
    username: "emin",
    email: "emin@gmail.comm",
    password: "$2b$10$3nGWsJ2OLCM7ln4644mM5uXb7Pmj0aFiTiC35EMTFy48qWLwEm40a",
    profilePicture: "",
    coverPicture: "",
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
