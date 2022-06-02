import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { login } from "../api/user";
import { UserContext } from "../Context";
import InputAndLabel from "../components/InputAndLabel";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, status, error, data } = useMutation(login);
  const { setIsLoading, setErrorMessage, setUser } = useContext(UserContext);
  useEffect(() => {
    if (status == "loading") {
      setIsLoading(true);
      setErrorMessage("");
    }
    if (status == "error") {
      setErrorMessage(error.response.data.message);
      setIsLoading(false);
    }
    if (status == "success") {
      setIsLoading(false);
      setErrorMessage("");
      setUser(data.data.user);
      localStorage.setItem("token", data.data.token);
    }
  }, [status, error, setIsLoading, setErrorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate({
      email,
      password,
    });
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="">
        <h1 className="mb-4 text-2xl">Sign In</h1>
        <InputAndLabel
          state={{
            id: "login-email",
            label: "Email",
            type: "email",
            handleChange: (e) => setEmail(e.target.value),
            value: email,
          }}
        />
        <InputAndLabel
          state={{
            id: "login-password",
            label: "Password",
            type: "password",
            handleChange: (e) => setPassword(e.target.value),
            value: password,
          }}
        />

        <p className="text-sm">
          Don't Have Account{" "}
          <Link to="/auth/signup" className="text-blue-600">
            Signup
          </Link>
        </p>
        <button type="submit" className="mx-auto my-2 mbc block  px-10 py-2 ">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
