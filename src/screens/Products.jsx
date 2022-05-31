import React, { useState } from "react";
import Card from "../components/Card";
import { useQuery } from "react-query";
import { getItems } from "../api/product";

function Browse() {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("shoe");
  const { data: items, status, refetch } = useQuery(
    ["get-items", { keyword, page, category }],
    getItems
  );
  return (
    <div className="min-h-screen pt-16 relative mb-10">
      <ul className="bg-[#eef4f9] uppercase  mt-10 mb-4 w-full flex justify-center flex-wrap mc text-md font-bold">
        <li
          className="px-3 my-2 mx-4 cursor-pointer hover:underline"
          onClick={() => setCategory("shoe")}
        >
          Shoes
        </li>
        <li
          className="px-3 my-2 mx-4 cursor-pointer hover:underline"
          onClick={() => setCategory("shirt")}
        >
          Shirts
        </li>
        <li
          className="px-3 my-2 mx-4 cursor-pointer hover:underline"
          onClick={() => setCategory("short")}
        >
          Shorts
        </li>
        <li
          className="px-3 my-2 mx-4 cursor-pointer hover:underline"
          onClick={() => setCategory("hat")}
        >
          Hats
        </li>
      </ul>
      <h2 className="text-center text-lg uppercase sc">
        <i class="fa-solid fa-arrow-right"></i> {category}
        <i class="fa-solid fa-arrow-left"></i>
      </h2>
      <div className="flex flex-wrap mt-8 justify-center lg:w-10/12 mx-auto">
        {items
          ? items.data.map((item) => {
              return <Card item={item} refetch={refetch} key={item._id} />;
            })
          : null}

        {items
          ? items.data.length == 0 && (
              <p className="text-2xl my-10 text-white mbc px-4 py-2 rounded">
                No Products Available{" "}
                <i class="fa-solid fa-face-frown text-amber-500"></i>
              </p>
            )
          : null}
      </div>
    </div>
  );
}

export default Browse;
