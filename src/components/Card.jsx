import { useMutation } from "react-query";
import { addToCart } from "../api/cart";
import { useContext } from "react";
import { UserContext } from "../Context";
import { Link } from "react-router-dom";

function Card({ item }) {
  const { status, mutate } = useMutation(addToCart);
  const { setUser, user } = useContext(UserContext);

  const _addToCart = () => {
    mutate(
      {
        id: item._id,
        quantity: 1,
        action: "update",
      },
      {
        onError: (error) => console.log(error),
        onSuccess: (response) =>
          setUser((oldUser) => {
            return { ...oldUser, cart: response.data };
          }),
      }
    );
  };

  return (
    <div className="h-96 w-72 border flex flex-col mx-5 my-5 rounded relative">
      {user && user.role == "admin" && (
        <button className="text-red-500 zw-fit bg-white absolute right-0 top-0  px-3 py-1 text-lg">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      )}
      <img
        src={`http://localhost:5000/${item.imgURL}`}
        alt=""
        className="w-full h-56	object-cover"
      />
      <div className="mx-2">
        <Link to="/" className="text-lg mc truncate block my-2 hover:underline">
          {item.name}
        </Link>
        <p className=" sc italic">{item.category}</p>
        <p className="text-lg text-green-700">{item.price}$</p>
      </div>
      <button
        className="py-1 px-8 w-fit self-center font-bold mt-4	"
        onClick={_addToCart}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default Card;
