import { useState, createContext, useContext, Children } from "react";
import { useAsyncValue } from "react-router";

const AuthContext = createContext(null);

export const AuthProvider = () => {
  const [user, setUser] = useState(null);
  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {Children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
