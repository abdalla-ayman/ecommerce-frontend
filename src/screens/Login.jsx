import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { login } from "../api/user";
import { UserContext } from "../Context";
import InputAndLabel from "../components/InputAndLabel";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, status } = useMutation(login);
  const context = useContext(UserContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate(
      {
        email,
        password,
      },
      {
        onError: (error) => console.log(error.response.data.message), //TODO: SHOW Error Message
        onSuccess: (data) => {
          context.setUser(data.data.user);
          localStorage.setItem("token", data.data.token);
        }, //TODO: Update Global state On Successfull login and Reroute to Main Page
      }
    );
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="">
        <h1 className="mb-4 text-2xl">Login</h1>
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
        <button
          type="submit"
          className="mx-auto my-2 block border rounded px-3 py-1 bg-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
