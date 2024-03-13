import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Home from "./Home";
import Footer from "../common/Footer";

export default function ProductDetails() {
  const [producid, setproducid] = useState([]);

  let currentId = useLocation();
  let currentpath = currentId.pathname;
  let cid = currentpath.split("/");
  let pid = cid[cid.length - 1];

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${pid}`).then((res) => {
      setproducid(res.data);
    });
  }, [pid]);

  return (
    <>
      <Home />
      <div className="w-[100%] py-[10px] bg-[#cbd5e1]">
        <div className="w-[90%] mx-auto">
          <div class="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              class="w-full h-56 object-cover object-center"
              src={producid.thumbnail}
            />
            <div class="px-4 py-2">
              <h2 class="text-gray-800 text-lg font-semibold">
                {producid.title}
              </h2>
              <p class="text-gray-600 text-sm mt-1">{producid.description}</p>
              <div class="flex items-center mt-2">
                <span class="text-sm font-semibold text-gray-600">
                  Price: {producid.price}
                </span>
                <span class="text-sm font-semibold text-gray-500 ml-2">
                  Discount: {producid.discountPercentage}
                </span>
              </div>
              <div class="flex items-center mt-2">
                <span class="text-sm font-semibold text-gray-600">
                  Rating: {producid.rating}
                </span>
                <span class="text-sm font-semibold text-gray-500 ml-2">
                  Stock: {producid.stock}
                </span>
              </div>
              <div class="flex items-center mt-2">
                <span class="text-sm font-semibold text-gray-600">
                  Brand: {producid.brand}
                </span>
                <span class="text-sm font-semibold text-gray-500 ml-2">
                  Category: {producid.category}
                </span>
              </div>
              <div class="flex justify-between items-center mt-4">
                <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                  Add to Cart
                </button>
                <button class="text-gray-600 hover:text-gray-800 focus:outline-none">
                  <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
