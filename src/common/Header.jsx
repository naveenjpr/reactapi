import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  <>
    <div className="w-[100%] ">
      <div className="w-[90%] mx-auto">
        <nav className="bg-gray-800 p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              Your App Name
            </Link>

            <div className="flex space-x-4">
              <Link to="/Products">Products</Link>

              <Link to="/Users">Users</Link>
              <Link to="/Posts">Posts</Link>
              <Link to="/Comments">Comments</Link>
              <Link to="/Quotes">Quotes</Link>
              <Link to="/Recipes">Recipes</Link>
              <Link to="/Todos">Todos</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </>;
}
