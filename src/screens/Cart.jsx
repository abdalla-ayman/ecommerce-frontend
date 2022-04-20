import CartItem from "../components/CartItem";
import { useQuery } from "react-query";
import { getTheCart } from "../api/cart";

function Cart() {
  const { data: response, status, refetch } = useQuery("get-cart", getTheCart);

  return (
    <div className="min-h-screen pt-16">
      {response
        ? response.data
          ? response.data.items.map((item) => {
              return <CartItem refetch={refetch} data={item} />;
            })
          : null
        : null}
    </div>
  );
}

export default Cart;
