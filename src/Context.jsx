import { useState, createContext } from "react";
import { validateToken } from "./api/user";
import { useQuery } from "react-query";

export const UserContext = createContext();

function Context({ children }) {
  const [user, setUser] = useState(null);
  const { data, status } = useQuery("validate-token", validateToken, {
    onSuccess: (response) => setUser(response.data.user),
    onError: (error) => {
      if (error.response.data.message == "invalid") {
        localStorage.removeItem("token");
      }
    },
    retry: false,
    enabled: localStorage.getItem("token") ? true : false,
  });

  return (
    <UserContext.Provider value={{ setUser, user }}>
      {children}
    </UserContext.Provider>
  );
}

export default Context;
