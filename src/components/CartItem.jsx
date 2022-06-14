import { useState, useContext, useEffect } from "react";
import { useMutation } from "react-query";
import { addToCart } from "../api/cart";
import { UserContext } from "../Context";

function CartCard({ data, refetch }) {
  const [itemQuantity, setItemQuantity] = useState(data.quantity);
  const { mutate, status, data: response } = useMutation(addToCart);
  const { setUser, setIsLoading } = useContext(UserContext);
  useEffect(() => {
    if (status === "loading") {
      setIsLoading(true);
    }
    if (status === "success") {
      setIsLoading(false);
      refetch();
      setUser((oldUser) => {
        return { ...oldUser, cart: response.data };
      });
    }
  }, [status, setIsLoading, response]);
  const item = data.item;

  const handleChange = (e) => {
    setItemQuantity(e.target.value);
  };

  return (
    <div className="bg-slate-100 w-full h-40 p-3 mx-2 md:mx-6 my-2 rounded flex  relative border md:max-w-xl	">
      <button
        onClick={(e) => {
          mutate({
            action: "delete",
            id: item._id,
            quantity: 0,
          });
        }}
        className="text-red-600 border zw-fit bg-white absolute right-0 top-0 rounded px-3 py-1 text-sm md:text-lg"
      >
        <i class="fa-solid fa-trash-can"></i>
      </button>
      <img
        src={`/images/${item.imgURL}`}
        alt=""
        className="w-32 object-cover"
      />
      <div className="mx-4 w-full ">
        <h1 className="hover:underline cursor-pointer truncate text-xl mc my-4">
          {item.name}
        </h1>
        <p className="sc italic">{item.category}</p>
        <div className="flex justify-between">
          <p className="text-sm md:text-lg text-green-700">{item.price}$</p>
          <div className="text-center flex flex-wrap flex-col sm:flex-row">
            <input
              type="number"
              className="min-w-0 w-16 rounded mx-0 text-xs sm:text-sm md:text-md my-1 text-center"
              value={itemQuantity}
              onChange={handleChange}
              min={1}
            />{" "}
            <button
              className="px-2 rounded text-xs sm:text-sm md:text-md my-1"
              onClick={(e) => {
                mutate({
                  action: "replace",
                  quantity: itemQuantity,
                  id: item._id,
                });
              }}
            >
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
