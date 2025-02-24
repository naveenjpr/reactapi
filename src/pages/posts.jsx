import React, { useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";
import Footer from "../common/Footer";

export default function Posts() {
  const [Apipost, setApipost] = useState([]);
  let getData = () => {
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => {
        return res.data;
      })
      .then((finalRes) => {
        setApipost(finalRes.posts);
      });
  };

  console.log(Apipost);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Home />
      <div className="w-[100%]">
        <div className="w-[90%] mx-auto">
          <div className="grid sm:grid-cols-4 grid-cols-1 gap-[10px] mt-2">
            {Apipost.length > 0 ? (
              Apipost.map((v, i) => {
                return (
                  <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-[aliceblue] hover:bg-[aquamarine] cursor-pointer">
                    <span className="font-bold text-lg">{i + 1}</span>
                    <div className="mb-2">
                      <span className="font-bold text-lg">Title:</span>
                      <span className="ml-2 text-red-900">{v.title}</span>
                    </div>
                    <div className="mb-2">
                      <span className="font-bold text-lg">Body:</span>
                      <p className="ml-2 text-red-900 overflow-auto max-h-[100px]">{v.body}</p>
                    </div>
                    <div className="mb-2">
                      <span className="font-bold text-lg">User ID:</span>
                      <span className="ml-2">{v.userId}</span>
                    </div>
                    <div className="mb-2">
                      <span className="font-bold text-lg">Tags:</span>
                      <span className="ml-2 text-red-400">{v.tags[0]}</span>
                      <span className="ml-2 text-green-400">{v.tags[1]}</span>
                      <span className="ml-2 text-blue-400">{v.tags[2]}</span>
                    </div>
                    {/* <div className="mb-2">
                      <span className="font-bold text-lg">Reactions:</span>
                      <span className="ml-2">{v.reactions}</span>
                    </div> */}
                  </div>
                );
              })
            ) : (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
