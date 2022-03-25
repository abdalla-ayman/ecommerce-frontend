import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { signup } from "../api/user";
import InputAndLabel from "../components/InputAndLabel";

function Signup() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, status, data } = useMutation(signup);
  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate(
      {
        email,
        password,
        firstname,
        lastname,
      },
      {
        onError: (e) => console.log(e.response.data.message), //TODO: SHOW Error Message
      }
    );
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-4 text-2xl">Signup</h1>
        <InputAndLabel
          state={{
            id: "firstname",
            label: "First Name",
            type: "text",
            handleChange: (e) => setFirstname(e.target.value),
            value: firstname,
          }}
        />
        <InputAndLabel
          state={{
            id: "lastname",
            label: "Last Name",
            type: "text",
            handleChange: (e) => setLastname(e.target.value),
            value: lastname,
          }}
        />

        <InputAndLabel
          state={{
            id: "signup-email",
            label: "Email",
            type: "email",
            handleChange: (e) => setEmail(e.target.value),
            value: email,
          }}
        />
        <InputAndLabel
          state={{
            id: "signup-password",
            label: "Password",
            type: "password",
            handleChange: (e) => setPassword(e.target.value),
            value: password,
          }}
        />
        <p className="text-sm">
          Already Have an Account{" "}
          <Link to="/auth/login" className="text-blue-600">
            Login
          </Link>
        </p>
        <button
          type="submit"
          className="mx-auto my-2 block border rounded px-3 py-1 bg-blue-500"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
