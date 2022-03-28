import { useMutation } from "react-query";
import { addToCart } from "../api/cart";
import { useContext } from "react";
import { UserContext } from "../Context";

function Card({ item }) {
  const { status, mutate } = useMutation(addToCart);
  const { setUser } = useContext(UserContext);

  const _addToCart = () => {
    mutate(
      {
        id: item._id,
        quantity: 1,
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
    <div className="h-96 w-72 border flex flex-col mx-10 my-5 rounded">
      <img
        src={`http://localhost:5000/${item.imgURL}`}
        alt=""
        className="w-full h-56	object-cover"
      />
      <div className="mx-2">
        <h3 className="text-lg mc">{item.name}</h3>
        <p className="text-sm sc border w-fit py-1 rounded px-4">
          {item.category}
        </p>
        <p className="sc">
          <sup>$</sup> {item.price}
        </p>
      </div>
      <button
        className="py-1 px-8 w-fit self-center font-bold mt-2	"
        onClick={_addToCart}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default Card;
