import { createContext, useReducer, useEffect } from "react";
import { getCurrentUser, login, logout } from "../api/authApi";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, null);

  useEffect(() => {
    const storedUser = getCurrentUser();
    if (storedUser) {
      dispatch({ type: "LOGIN", payload: storedUser });
    }
  }, []);

  const signIn = (email, password) => {
    const result = login(email, password);
    if (result) {
      dispatch({ type: "LOGIN", payload: result.user });
      return true;
    }
    return false;
  };

  const signOut = () => {
    logout();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
