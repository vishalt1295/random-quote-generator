import React from "react";
import { useQuoteContext } from "../context/quote.context";

export default function Category() {
  const { tags, setCategory, fetchAPI } = useQuoteContext([]);

  const handleChange = (e) => {
    setCategory(e.target.value);
    // console.log(e.target.value);
    fetchAPI();
  };

  return (
    <select
      onChange={handleChange}
      className="mb-2 py-2 px-3 pe-9 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500  "
    >
      <option defaultValue>Select Category</option>
      {tags.map((tag) => {
        return <option value={tag.slug}>{tag.name}</option>;
      })}
    </select>
  );
}
