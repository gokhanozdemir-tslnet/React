import { createContext, useState } from "react";

//as the actual value , want to access
export const UserContext = createContext({
  currentUser: { email: "", password: "" },
  setCurrentUser: () => null,
}); //default

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ email: "", password: "" });
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
