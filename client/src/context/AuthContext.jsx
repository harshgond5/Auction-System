import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const dummyUsers = [
  {
    id: 1,
    name: "Buyer User",
    email: "buyer@auctionhub.com",
    password: "Buyer@123",
    role: "buyer",
  },
  {
    id: 2,
    name: "Seller User",
    email: "seller@auctionhub.com",
    password: "Seller@123",
    role: "seller",
  },
  {
    id: 3,
    name: "Admin",
    email: "admin@auctionhub.com",
    password: "Admin@123",
    role: "admin",
  },
];

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export const useAuth = () => useContext(AuthContext);