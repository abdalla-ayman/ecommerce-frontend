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
    <div className="h-96 w-72	 bg-teal-100">
      <img
        src={`http://localhost:5000/${item.imgURL}`}
        alt=""
        className="w-full h-64 object-cover"
      />
      <h3>{item.name}</h3>
      <div>
        <span>{item.price}$</span>{" "}
        <button className="bg-blue-300" onClick={_addToCart}>
          Add ot Cart
        </button>
      </div>

      <p>{item.category}</p>
    </div>
  );
}

export default Card;
