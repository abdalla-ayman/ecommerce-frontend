import CartItem from "../components/CartItem";
import { useQuery, useMutation } from "react-query";
import { getTheCart, checkout } from "../api/cart";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../Context";

function Cart() {
  const [price, setPrice] = useState("--");
  const { user } = useContext(UserContext);
  const { error, data: response, status, refetch } = useQuery(
    "get-cart",
    getTheCart,
    {
      enabled: user ? true : false,
    }
  );

  const { error: checkoutError, mutate, status: checkoutStatus } = useMutation(
    checkout
  );
  const { setIsLoading, setErrorMessage } = useContext(UserContext);
  useEffect(() => {
    if (status == "loading") {
      setIsLoading(true);
      setErrorMessage("");
    }
    if (status == "error") {
      setErrorMessage(error);
      setIsLoading(false);
    }
    if (status == "success") {
      if (response.data.itemsQuantity > 0) {
        let total = 0;
        response.data.items.forEach((i) => {
          total += i.quantity * i.item.price;
        });
        setPrice(total);
      } else {
        setPrice("--");
      }
      setIsLoading(false);
      setErrorMessage("");
    }
  }, [status, error, setIsLoading, setErrorMessage, response]);

  useEffect(() => {
    if (checkoutStatus == "loading") {
      setIsLoading(true);
      setErrorMessage("");
    }
    if (checkoutStatus == "error") {
      setErrorMessage(checkoutError.response.data.message);
      setIsLoading(false);
    }
  }, [checkoutStatus, checkoutError, setIsLoading, setErrorMessage]);

  return (
    <div className="min-h-screen pt-16 flex flex-col items-center bg-slate-200">
      {user ? (
        <>
          {" "}
          {response
            ? response.data
              ? response.data.items.map((item) => {
                  return (
                    <CartItem key={item.id} refetch={refetch} data={item} />
                  );
                })
              : null
            : null}
          {response
            ? response.data.itemsQuantity == 0 && (
                <p className="text-2xl my-16 mc  px-4 py-2 rounded text-center">
                  Your cart is empty <br></br>
                  <Link
                    to={"/browse/products"}
                    className="text-base md:text-lg px-2 py-1 rounded my-2 inline-block hover:-translate-y-px mbc text-white	"
                  >
                    start filling it
                  </Link>
                </p>
              )
            : null}
          <div className="h-12"></div>
          <div className="mbc text-white px-2 py-4 fixed bottom-0 left-0 right-0 text-center">
            <p className="text-lg">
              {price} {price == "--" ? null : "$"}{" "}
            </p>
            <button
              disabled={price == "--"}
              id="checkout-btn"
              className="border-white border mt-2 mb-2 text-sm uppercase px-2 py-1 border-2 rounded-full "
              onClick={mutate}
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="my-auto -translate-y-5	 text-2xl mc text-center">
          You are not logged in <br></br>
          <Link
            to={"/auth/login"}
            className="	 text-sm px-2 py-1 rounded my-2 inline-block hover:-translate-y-px text-white mbc	"
          >
            Login
          </Link>
        </p>
      )}
    </div>
  );
}

export default Cart;
