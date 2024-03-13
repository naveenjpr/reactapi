import React, { useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";

export default function Todos() {
  let [todos, settodos] = useState([]);

  let getData = () => {
    axios
      .get("https://dummyjson.com/todos")
      .then((res) => {
        return res.data;
      })
      .then((FinalRes) => {
        settodos(FinalRes.todos);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Home />
      <div className="w-[100%]">
        <div className="w-[90%] mx-auto">
          <div className="grid sm:grid-cols-5 grid-cols-1 gap-[10px] mt-[5px]">
            {todos.length > 0 ? (
              todos.map((v, i) => {
                return (
                  <div class="border flex flex-col items-start bg-orange-200 border-gray-200 rounded-md p-4 mb-4">
                    <div class="flex  mb-2">
                      <p class="ml-2 text-gray-800 ">
                        <span className="font-bold text-blue-400">todo:</span>
                        <br />
                        {v.todo}
                      </p>
                    </div>

                    <div className="ms-[10px]">
                      <p class="text-red-500">{v.completed}</p>

                      <p class=" font-bold text-gray-500">
                        User ID: {v.userId}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div> no data </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
