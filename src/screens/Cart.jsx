import CartItem from "../components/CartItem";
import { useQuery } from "react-query";
import { getTheCart } from "../api/cart";

function Cart() {
  const { data: response, status, refetch } = useQuery("get-cart", getTheCart);

  return (
    <div className="min-h-screen pt-16 flex  flex-col items-center">
      {response
        ? response.data
          ? response.data.items.map((item) => {
              return <CartItem refetch={refetch} data={item} />;
            })
          : null
        : null}

      <div className="mbc text-white px-2 py-4 fixed bottom-0 left-0 right-0 text-center">
        <p className="text-lg">100$</p>
        <button className="border-white border mt-2 mb-2 text-sm uppercase px-2 py-1 border-2 rounded-full hover:rounded hover:font-bold hover:shadow-lg">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
