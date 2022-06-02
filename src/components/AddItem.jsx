import { useState, useEffect, useContext } from "react";
import { addItem } from "../api/product";
import InputAndLabel from "./InputAndLabel";
import { useMutation } from "react-query";
import { UserContext } from "../Context";

function AddItem() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("shirt");
  const [img, setImg] = useState(null);
  const [imgPrev, setImgPrev] = useState("");
  const { mutate, status, error } = useMutation(addItem);
  const { setIsLoading, setErrorMessage } = useContext(UserContext);
  useEffect(() => {
    if (status == "loading") {
      setIsLoading(true);
      setErrorMessage("");
    }
    if (status == "error") {
      setErrorMessage(error);
      setIsLoading(false);
    }
    if (status == "success" || status == "idle") {
      setIsLoading(false);
    }
  }, [status, error, setIsLoading, setErrorMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (status == "loading") return;

    mutate({
      name,
      price,
      category,
      img,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-lg mx-auto">
      <img
        src={imgPrev}
        alt=""
        className="w-72 h-56	object-cover border-solid border-2 border-gray-400 rounded   self-center"
      />
      <InputAndLabel
        state={{
          id: "item-image",
          label: "Prodcut Image",
          type: "file",
          handleChange: (e) => {
            setImg(e.target.files[0]);
            setImgPrev(URL.createObjectURL(e.target.files[0]));
          },
          value: img,
        }}
      />

      <InputAndLabel
        state={{
          id: "item-name",
          label: "Prodcut Name",
          type: "text",
          handleChange: (e) => setName(e.target.value),
          value: name,
        }}
      />

      <InputAndLabel
        state={{
          id: "item-price",
          label: "Price",
          type: "Number",
          handleChange: (e) => setPrice(Number(e.target.value)),
          value: price,
        }}
      />

      <div className="flex flex-col">
        <label htmlFor="item-category" className="mb-2">
          Category
        </label>
        <select
          id="item-category"
          className="px-2 py-2 border rounded"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="shirt">Shirt</option>
          <option value="short">Shorts</option>
          <option value="shoe">Shoes</option>
          <option value="hat">Hats</option>
        </select>
      </div>

      <button
        type="submit"
        className="mx-auto my-6 block border rounded px-3 py-1 bg-blue-500 uppercase"
      >
        Add
      </button>
    </form>
  );
}

export default AddItem;
