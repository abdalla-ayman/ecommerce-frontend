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
    <div className="min-h-screen">
      {items
        ? items.data.map((item) => {
            return <Card item={item} key={item._id} />;
          })
        : null}
    </div>
  );
}

export default Browse;
