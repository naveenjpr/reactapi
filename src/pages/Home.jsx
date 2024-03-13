import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {" "}
      <nav className="bg-gray-800" id="top">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center  justify-between ">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-white">Dummy-Api</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className="text-white hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/product"
                    className="text-white hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    product
                  </Link>
                  <Link
                    to="/Carts"
                    className="text-white hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Carts
                  </Link>
                  <Link
                    to="/Users"
                    className="text-white hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Users
                  </Link>
                  <Link
                    to="/posts"
                    className="text-white hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    posts
                  </Link>
                  <Link
                    to="/Comments"
                    className="text-white hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Comments
                  </Link>
                  <Link
                    to="/Quotes"
                    className="text-white hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Quotes
                  </Link>
                  <Link
                    to="/Recipes"
                    className="text-white hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Recipes
                  </Link>
                  <Link
                    to="/Todos"
                    className="text-white hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Todos
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover: focus:outline-none focus: focus:text-white transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
              >
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <Link
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/product"
              className="text-white mt-1 block px-3 py-2 rounded-md text-base font-medium"
            >
              product
            </Link>
            <Link
              to="/Carts"
              className="text-white mt-1 block px-3 py-2 rounded-md text-base font-medium"
            >
              Carts
            </Link>
            <Link
              to="/Users"
              className="text-white mt-1 block px-3 py-2 rounded-md text-base font-medium"
            >
              Users
            </Link>
            <Link
              to="/posts"
              className="text-white mt-1 block px-3 py-2 rounded-md text-base font-medium"
            >
              posts
            </Link>
            <Link
              to="/Comments"
              className="text-white mt-1 block px-3 py-2 rounded-md text-base font-medium"
            >
              Comments
            </Link>
            <Link
              to="/Quotes"
              className="text-white mt-1 block px-3 py-2 rounded-md text-base font-medium"
            >
              Quotes
            </Link>
            <Link
              to="/Recipes"
              className="text-white mt-1 block px-3 py-2 rounded-md text-base font-medium"
            >
              Recipes
            </Link>
            <Link
              to="/Todos"
              className="text-white mt-1 block px-3 py-2 rounded-md text-base font-medium"
            >
              Todos
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
