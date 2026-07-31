import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const dummyUsers = [
  {
    id: 1,
    name: "User",
    email: "user@auctionhub.com",
    password: "user@123",
    role: "userr",
  },
  {
    id: 2,
    name: "Admin",
    email: "admin@auctionhub.com",
    password: "Admin@123",
    role: "admin",
  },
];

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

function updateUser(updatedData) {

    const updatedUser = {

        ...user,

        ...updatedData,

    };

    setUser(updatedUser);

    localStorage.setItem(
        "auctionhub-user",
        JSON.stringify(updatedUser)
    );

}  

  useEffect(() => {
    const savedUser = localStorage.getItem("auctionhub-user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email, password) => {
    const foundUser = dummyUsers.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    localStorage.setItem(
      "auctionhub-user",
      JSON.stringify(foundUser)
    );

    setUser(foundUser);

    return {
    success: true,
    role: foundUser.role,
    user: foundUser,
    };
  };

  const logout = () => {
    localStorage.removeItem("auctionhub-user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export const useAuth = () => useContext(AuthContext);