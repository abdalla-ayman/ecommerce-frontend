import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context";

function Navbar() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <nav
        className="flex justify-between items-center px-4 py-2 drop-shadow-md mc fixed bg-white w-full top-0 z-20 h-
    "
      >
        <div className="mr-6 text-2xl  md:text-3xl">
          <NavLink to="/">SELLERS</NavLink>
        </div>
        <ul className="flex font-medium	items-center text-center">
          <li className="mx-2">
            <NavLink to="/browse/products">Products</NavLink>
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
            <NavLink to="/browse/cart" className="p-2 hidden md:inline">
              <i class="fa-solid fa-cart-shopping"></i>{" "}
              <span className="rounded px-1 mx-auto text-sm bold bg-red-600 text-white">
                {user ? (user.cart ? user.cart.itemsQuantity : 0) : 0}
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="fixed bottom-0 right-0 mb-10 mr-4 bg-slate-300 drop-shadow-2xl p-3 rounded-full	 z-50">
        <NavLink to="/browse/cart" className=" text-lg mc inline md:hidden">
          <i class="fa-solid fa-cart-shopping"></i>{" "}
          <span className="rounded px-1  text-sm bold bg-red-600 text-white">
            {user ? (user.cart ? user.cart.itemsQuantity : 0) : 0}
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
