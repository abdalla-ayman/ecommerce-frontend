import { useState, createContext } from "react";
import { validateToken } from "./api/user";
import { useQuery } from "react-query";

export const UserContext = createContext();

function Context({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
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
    <UserContext.Provider
      value={{ setUser, user, setIsLoading, setErrorMessage }}
    >
      {children}

      {(isLoading || ErrorMessage) && (
        <div className="mbc text-white z-50 fixed top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 rounded">
          {isLoading && (
            <p className="px-2 py-1 m-3">
              Loading <i className="fa-solid fa-spinner animate-spin mx-1	"></i>
            </p>
          )}

          {ErrorMessage && !isLoading && (
            <div>
              <p className="px-2 py-1 m-3">
                {ErrorMessage}{" "}
                <i className="fa-solid fa-face-frown-open text-amber-400"></i>
              </p>
              <button
                className="bg-white mc font-semibold mx-auto block my-2 px-2 rounded"
                onClick={() => setErrorMessage("")}
              >
                Ok
              </button>
            </div>
          )}
        </div>
      )}
    </UserContext.Provider>
  );
}

export default Context;
