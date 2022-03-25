import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context";

function Navbar() {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav
      className="flex justify-between bg-amber-400 text-lg  px-3 py-2 uppercase
    "
    >
      <div className="flex">
        <div className="mr-6 font-bold">LOGO</div>
        <ul className="flex">
          <li className="mx-2">
            <NavLink to="/"> Home</NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/products">Produts</NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
      <div
        className="text-base capitalize
"
      >
        {user ? (
          <button
            className="p-2 bg-emerald-500 rounded"
            onClick={() => {
              setUser(null);
              localStorage.removeItem("token");
            }}
          >
            Logout
          </button>
        ) : (
          <NavLink to="/auth/login" className="p-2 bg-emerald-500 rounded">
            Login <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </NavLink>
        )}
        <NavLink to="/cart" className="p-2 bg-emerald-500 mx-1 rounded ">
          <i class="fa-solid fa-cart-shopping"></i>{" "}
          <span className="rounded px-1 mx-auto text-sm bold bg-red-600 text-white">
            {user ? (user.cart ? user.cart.itemsQuantity : 0) : 0}
          </span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
