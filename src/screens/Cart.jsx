import React from "react";
import { useQuery } from "react-query";
import { getTheCart } from "../api/cart";

function Cart() {
  const { data, status } = useQuery("get-cart", getTheCart);
  console.log(data);

  return <div>Cart</div>;
}

export default Cart;
