/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [activeCollection, setActiveCollection] = useState(null);
  // Function to set the authentication token
  const setToken = (newToken) => {
    setToken_(newToken);
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const decoded = jwtDecode(token);
          if (decoded.exp * 1000 < Date.now()) {
            setToken(null);
            setUser(null);
          } else {
            setUser({ ...decoded });
          }
        } catch (error) {
          setToken(null);
          setUser(null);
        }
      } else {
        setUser(null);
        localStorage.removeItem("token");
      }
    })();
  }, [token]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      user,
      setUser,
      activeCollection,
      setActiveCollection,
    }),
    [token, user, activeCollection]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
