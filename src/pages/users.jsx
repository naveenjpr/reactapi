import React, { useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";
import Footer from "../common/Footer";

export default function Users() {
  const [firstuser, setfirstuser] = useState([]);
  let getData = () => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        return res.data;
      })
      .then((FinalRes) => {
        setfirstuser(FinalRes.users);
      });
  };
  console.log(firstuser);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Home />
      <div className="w-[100%]">
        <div className="w-[90%] mx-auto">
          <div className="grid sm:grid-cols-3 grid-cols-1  gap-[10px]">
            {firstuser.length > 0 ? (
              firstuser.map((v, i) => {
                return (
                  <div className="w-[100%] mx-auto bg-white p-8 rounded  shadow-xl shadow-red-900">
                    <h1 className="text-2xl font-bold mb-4">
                      User Information
                    </h1>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <img
                          src={v.image}
                          className="w-40 h-40 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="font-semibold">
                            Name:
                            {v.firstName +
                              " " +
                              v.maidenName +
                              " " +
                              v.lastName}
                          </span>{" "}
                        </p>
                        <p>
                          <span className="font-semibold">Age:{v.age}</span>
                        </p>
                        <p>
                          <span className="font-semibold">
                            Gender:{v.gender}
                          </span>
                        </p>
                        <p>
                          <span className="font-semibold">Email:{v.email}</span>{" "}
                        </p>
                        <p>
                          <span className="font-semibold">Phone:{v.phone}</span>
                        </p>
                        <p>
                          <span className="font-semibold">
                            Username:{v.username}
                          </span>{" "}
                        </p>
                        <p>
                          <span className="font-semibold">
                            Password:{v.password}
                          </span>{" "}
                        </p>
                        <p>
                          <span className="font-semibold">
                            Birth Date:{v.birthDate}
                          </span>{" "}
                        </p>
                        <p>
                          <span className="font-semibold">
                            Blood Group:{v.bloodGroup}
                          </span>
                        </p>
                        <p>
                          <span className="font-semibold">
                            Height:{v.height}
                          </span>
                        </p>
                        <p>
                          <span className="font-semibold">
                            Weight:{v.weight}
                          </span>
                        </p>
                        <p>
                          <span className="font-semibold">
                            Eye Color:{v.eyeColor}
                          </span>{" "}
                        </p>
                        <p>
                          <span className="font-semibold">
                            Hair Color:{v.hair.color}
                          </span>{" "}
                        </p>
                        <p>
                          <span className="font-semibold">
                            Hair Type:{v.hair.type}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h2 className="text-lg font-semibold mb-2 text-[red]">
                        Address
                      </h2>
                      <p>
                        <span className="font-semibold">
                          Address:{v.address.address}
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold">
                          city:{v.address.city}
                        </span>
                      </p>

                      <p>
                        <span className="font-semibold">
                          State:{v.address.state}
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold">
                          Postal Code:{v.address.postalCode}
                        </span>{" "}
                      </p>
                    </div>
                    <div className="mt-4">
                      <h2 className="text-lg font-semibold mb-2 text-[red]">
                        Company
                      </h2>
                      <p>
                        <span className="font-semibold">
                          Name:{v.company.name}
                        </span>{" "}
                      </p>
                      <p>
                        <span className="font-semibold">
                          Department:{v.company.department}
                        </span>{" "}
                      </p>
                      <p>
                        <span className="font-semibold">
                          Title:{v.company.title}
                        </span>{" "}
                      </p>
                      <p>
                        <span className="font-semibold">
                          Address:{v.company.address.address}
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold">
                          Coordinates:{v.company.address.coordinates.lat}
                        </span>
                      </p>
                    </div>
                    <div className="mt-4">
                      <h2 className="text-lg font-semibold mb-2 text-[red]">
                        Bank Information
                      </h2>
                      <p>
                        <span className="font-semibold">
                          Card Type:{v.bank.cardType}
                        </span>{" "}
                      </p>
                      <p>
                        <span className="font-semibold">
                          Card Number:{v.bank.cardNumber}
                        </span>{" "}
                      </p>
                      <p>
                        <span className="font-semibold">
                          Card Expire:{v.bank.cardExpire}
                        </span>{" "}
                      </p>
                      <p>
                        <span className="font-semibold">
                          Currency:{v.bank.currency}
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold">
                          IBAN:{v.bank.iban}
                        </span>
                      </p>
                    </div>
                    <div className="mt-4">
                      <h2 className="text-lg font-semibold mb-2 text-[red]">
                        Crypto Information
                      </h2>
                      <p>
                        <span className="font-semibold">
                          Coin:{v.crypto.coin}
                        </span>
                      </p>
                      <p className="border border-green-300 overflow-auto px-[8px] ">
                        <span className="font-semibold">
                          Wallet:
                          <br />
                          {v.crypto.wallet}
                        </span>{" "}
                      </p>
                      <p className="">
                        <span className="font-semibold ">
                          Network:{v.crypto.network}
                        </span>
                      </p>
                    </div>
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
