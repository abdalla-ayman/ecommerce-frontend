import CartItem from "../components/CartItem";
import { useQuery } from "react-query";
import { getTheCart } from "../api/cart";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [price, setPrice] = useState("--");
  const { data: response, status, refetch } = useQuery("get-cart", getTheCart, {
    onSuccess: (res) => {
      if (res.data.itemsQuantity > 0) {
        let total = 0;
        res.data.items.forEach((i) => {
          total += i.quantity * i.item.price;
        });
        setPrice(total);
      }
    },
  });

  return (
    <div className="min-h-screen pt-16 flex  flex-col items-center">
      {response
        ? response.data
          ? response.data.items.map((item) => {
              return <CartItem key={item.id} refetch={refetch} data={item} />;
            })
          : null
        : null}

      {response
        ? response.data.itemsQuantity == 0 && (
            <p className="text-2xl my-16 text-white mbc px-4 py-2 rounded text-center">
              Your cart is empty <br></br>
              <Link
                to={"/products"}
                className="text-md font-light px-2 py-1 rounded my-2 inline-block hover:-translate-y-px bg-white mc	"
              >
                start filling it
              </Link>
            </p>
          )
        : null}

      <div className="mbc text-white px-2 py-4 fixed bottom-0 left-0 right-0 text-center">
        <p className="text-lg">
          {price} {price == "--" ? null : "$"}{" "}
        </p>
        <button
          disabled={price == "--"}
          id="checkout-btn"
          className="border-white border mt-2 mb-2 text-sm uppercase px-2 py-1 border-2 rounded-full "
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
