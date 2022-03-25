import { useState } from "react";
import { addItem } from "../api/product";
import InputAndLabel from "./InputAndLabel";
import { useMutation } from "react-query";

function AddItem() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("1");
  const [img, setImg] = useState(null);
  const { mutate, status } = useMutation(addItem);

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
    <form onSubmit={handleSubmit}>
      <InputAndLabel
        state={{
          id: "item-image",
          label: "Prodcut Image",
          type: "file",
          handleChange: (e) => setImg(e.target.files[0]),
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
          className="px-2 py-1 border rounded"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="1">1</option>
          <option value="2">2</option>
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
