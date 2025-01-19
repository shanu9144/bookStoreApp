import React, { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  const signup = async (fullname, email, password) => {
    try {
      const response = await axios.post("/user/signup", { fullname, email, password });
      setAuthUser(response.data.user);
      localStorage.setItem("Users", JSON.stringify(response.data.user));
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post("/user/login", { email, password });
      setAuthUser(response.data.user);
      localStorage.setItem("Users", JSON.stringify(response.data.user));
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node,
};