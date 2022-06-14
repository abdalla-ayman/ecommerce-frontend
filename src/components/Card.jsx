import { useMutation } from "react-query";
import { addToCart } from "../api/cart";
import { deleteItem } from "../api/product";
import { useContext, useEffect } from "react";
import { UserContext } from "../Context";

function Card({ item, refetch }) {
  const { status, mutate, error, data } = useMutation(addToCart);
  const {
    status: deleteItemStatus,
    mutate: deleteItemMutation,
    error: deleteItemError,
  } = useMutation(deleteItem);
  const { setUser, user, setIsLoading, setErrorMessage } = useContext(
    UserContext
  );

  useEffect(() => {
    if (status === "loading") {
      setIsLoading(true);
      setErrorMessage("");
    }
    if (status === "error") {
      setIsLoading(false);
      setErrorMessage(error.response.data.message);
    }
    if (status === "success") {
      setIsLoading(false);
      setErrorMessage("");
      setUser((oldUser) => {
        return { ...oldUser, cart: data.data };
      });
    }
  }, [error, data, status, setIsLoading, setErrorMessage]);
  useEffect(() => {
    if (deleteItemStatus === "loading") {
      setIsLoading(true);
      setErrorMessage("");
    }
    if (deleteItemStatus === "error") {
      setIsLoading(false);
      setErrorMessage(deleteItemError.response.data.message);
    }
    if (deleteItemStatus === "success") {
      setIsLoading(false);
      setErrorMessage("");
      refetch();
    }
  }, [deleteItemError, deleteItemStatus, setIsLoading, setErrorMessage]);

  const _deleteItem = () => {
    deleteItemMutation({
      id: item._id,
    });
  };

  const _addToCart = () => {
    mutate({
      id: item._id,
      quantity: 1,
      action: "update",
    });
  };

  return (
    <div className="h-96 w-72 border flex flex-col mx-5 my-5 rounded relative bg-white">
      {user && user.role == "admin" && (
        <button
          className="text-red-500 w-fit bg-white absolute right-0 top-0  px-3 py-1 text-lg"
          onClick={_deleteItem}
        >
          <i class="fa-solid fa-trash-can"></i>
        </button>
      )}
      <img
        src={`/images/${item.imgURL}`}
        alt=""
        className="w-full h-56	object-cover"
      />
      <div className="mx-2">
        <p className="text-lg mc truncate block my-2 font-bold	">{item.name}</p>
        <p className=" sc italic">{item.category}</p>
        <p className="text-lg text-green-700">{item.price}$</p>
      </div>
      <button className="mbc px-5 w-fit self-center  mt-4	" onClick={_addToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default Card;
