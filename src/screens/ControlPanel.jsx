import AddItem from "../components/AddItem";
import { useContext } from "react";
import { UserContext } from "../Context";
import { Link } from "react-router-dom";

function ControlPanel() {
  const { setUser, user } = useContext(UserContext);

  return (
    <>
      {user ? (
        user.role == "admin" ? (
          <div className="min-h-screen bg-slate-100">
            <div className="h-64 mbc text-white flex flex-col justify-center items-center text-4xl">
              <i class="fa-solid fa-worm mb-4 animate-bounce"></i>
              <h1>Control Panel</h1>
            </div>
            <div className="p-16">
              <AddItem />
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center min-h-screen	bg-slate-200 text-2xl mc">
            <p className="my-2 text-3xl">You are not an admin</p>
            <p className="my-2">
              Why are u here <i className="fa-solid fa-question mx-2 "></i>
            </p>
          </div>
        )
      ) : (
        <div className="flex flex-col justify-center items-center min-h-screen	bg-slate-200 text-2xl mc">
          <p className="my-2 text-3xl">You are not loggedin</p>
          <Link
            to={"/auth/login"}
            className="mbc text-white px-2 py-1 rounded text-base"
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
}

export default ControlPanel;
