import React, { useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";
import Footer from "../common/Footer";

export default function Recipes() {
  const [recipes, setrecipes] = useState([]);

  let getData = () => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        return res.data;
      })
      .then((finalRes) => {
        setrecipes(finalRes.recipes);
      });
  };
  console.log(recipes);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Home />
      <div className="w-[100%] scroll-smooth	" id="">
        <div className="w-[90%] mx-auto">
          <div className="grid sm:grid-cols-3  grid-cols-1">
            {recipes.length > 0 ? (
              recipes.map((v, i) => {
                return (
                  <div key={i} className="max-w-[100%] mx-auto p-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                      <img
                        src={v.image}
                        alt="Classic Margherita Pizza"
                        className="w-[100%] h-64 object-cover"
                      />
                      <div className="p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                          Name:{v.name}
                        </h2>
                        <div className="flex items-center text-gray-600 mb-4">
                          <span className="mr-2 border border-[grey] text-center">
                            Difficulty: {v.difficulty}
                          </span>
                          <span className="mr-2 border border-[grey] text-center">
                            Cuisine: {v.cuisine}
                          </span>
                          <span className="border border-[grey] text-center">
                            Rating: {v.rating}
                          </span>
                        </div>
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Ingredients:
                          </h3>
                          <ul className="list-disc pl-5">
                            <li>{v.ingredients[0]}</li>
                            <li>{v.ingredients[1]}</li>
                            <li>{v.ingredients[2]}</li>
                            <li>{v.ingredients[3]}</li>
                            <li>{v.ingredients[4]}</li>
                            <li>{v.ingredients[5]}</li>
                          </ul>
                        </div>
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Instructions:
                          </h3>
                          <ol className="list-decimal pl-5">
                            <li>{v.instructions[0]}</li>
                            <li>{v.instructions[1]}</li>
                            <li>{v.instructions[2]}</li>
                            <li>{v.instructions[3]}</li>
                            <li>{v.instructions[4]}</li>
                            <li>{v.instructions[5]}</li>
                          </ol>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <span className="mr-4 border border-[grey] text-center">
                            Prep Time: {v.prepTimeMinutes}
                          </span>
                          <span className="mr-4 border border-[grey] text-center">
                            Cook Time: {v.cookTimeMinutes}
                          </span>
                          <span className="border border-[grey] text-center">
                            Servings: {v.servings}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>no data </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
