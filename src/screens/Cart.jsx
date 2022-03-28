import CartItem from "../components/CartItem";
import { useQuery } from "react-query";
import { getTheCart } from "../api/cart";

function Cart() {
  const { data: response, status } = useQuery("get-cart", getTheCart);

  return (
    <div>
      {response
        ? response.data.items.map((item) => {
            return <CartItem data={item} />;
          })
        : null}
    </div>
  );
}

export default Cart;
