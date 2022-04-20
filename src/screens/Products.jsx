import React, { useState } from "react";
import Card from "../components/Card";
import { useQuery } from "react-query";
import { getItems } from "../api/product";

function Browse() {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const { data: items, status } = useQuery(
    ["get-items", { keyword, page, category }],
    getItems
  );
  return (
    <div className="min-h-screen pt-16 relative">
      <ul className="bg-[#eef4f9] uppercase  mt-10 mb-4 w-full flex justify-center flex-wrap mc text-md font-bold">
        <li className="px-3 my-2 mx-4 cursor-pointer hover:underline">Shoes</li>
        <li className="px-3 my-2 mx-4 cursor-pointer hover:underline">
          Shitys
        </li>
        <li className="px-3 my-2 mx-4 cursor-pointer hover:underline">
          Shorts
        </li>
        <li className="px-3 my-2 mx-4 cursor-pointer hover:underline">HAts</li>
      </ul>
      <h2 className="text-center text-lg uppercase sc">
        <i class="fa-solid fa-arrow-right"></i> Shoes{" "}
        <i class="fa-solid fa-arrow-left"></i>
      </h2>
      <div className="flex flex-wrap justify-center">
        {items
          ? items.data.map((item) => {
              return <Card item={item} key={item._id} />;
            })
          : null}
      </div>
    </div>
  );
}

export default Browse;
