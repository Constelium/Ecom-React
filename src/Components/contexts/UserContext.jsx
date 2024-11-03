import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthPopupOpen, setAuthPopupOpen] = useState(false);

  const register = async (username, email, password) => {
    try {
      const response = await fetch("http://localhost:3001/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      console.log("User registered:", data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const login = async (username, password) => {
    try {
      const response = await fetch("http://localhost:3001/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.token) {
        setUser({ username, token: data.token });
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const oauthLogin = async (email, name) => {
    try {
      const response = await fetch("http://localhost:3001/user/oauth-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });
      const data = await response.json();
      if (data.token) {
        setUser({ email, token: data.token });
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.error("Error with OAuth login:", error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  const toggleAuthPopup = () => {
    setAuthPopupOpen(!isAuthPopupOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Vérifier si le token est valide
      fetch("http://localhost:3001/user/verify-token", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setUser(data.user);
          } else {
            logout();
          }
        })
        .catch(() => {
          logout();
        });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        register,
        login,
        oauthLogin,
        logout,
        isAuthPopupOpen,
        toggleAuthPopup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
