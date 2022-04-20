import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context";

function Navbar() {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav
      className="flex justify-between items-center px-4 py-2 drop-shadow-md mc fixed bg-white w-full top-0 z-20 h-
    "
    >
      <div className="mr-6 text-3xl">
        <NavLink to="/">SELLERS</NavLink>
      </div>
      <ul className="flex font-medium	">
        <li className="mx-2">
          <NavLink to="/products">Products</NavLink>
        </li>
        {user ? (
          <li className="mx-2">
            <button
              className="mc bg-transparent font-medium"
              onClick={() => {
                setUser(null);
                localStorage.removeItem("token");
              }}
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <NavLink to="/auth/login" className="p-2 ">
              Sign In
            </NavLink>
          </li>
        )}
        <li>
          <NavLink to="/cart" className="p-2  ">
            <i class="fa-solid fa-cart-shopping"></i>{" "}
            <span className="rounded px-1 mx-auto text-sm bold bg-red-600 text-white">
              {user ? (user.cart ? user.cart.itemsQuantity : 0) : 0}
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
