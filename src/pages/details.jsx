import React from "react";
import Header from "../component/header";
import { useNavigate } from "react-router-dom";

export default function Details() {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    const data = localStorage.getItem("detail") || [];
    const existingData = JSON.parse(data);
    const updatedData = { ...existingData, ...formObject };
    localStorage.setItem("detail", JSON.stringify(updatedData));
    navigate("/checkout");
  };

  return (
    <div className="flex flex-col justify-start items-start w-full h-screen">
      <Header />
      <div className="w-full px-10 py-10 flex justify-center items-center">
        <form
          className="flex flex-col gap-4 w-[50%] border border-gray-300 px-6 py-6 rounded-md"
          onSubmit={handleClick}
        >
          <div className="flex gap-2 w-full">
            <input
              className="h-10 flex-1 rounded-md bg-[#F0F5FF] px-2"
              placeholder="First Name"
              name="firstName"
            />
            <input
              className="h-10 flex-1 rounded-md bg-[#F0F5FF] px-2"
              placeholder="Last Name"
              name="lastName"
            />
          </div>
          <input
            className="h-10 rounded-md bg-[#F0F5FF] px-2"
            placeholder="Email Address"
            name="email"
          />
          <input
            className="h-10 rounded-md bg-[#F0F5FF] px-2"
            placeholder="Shipping Address"
            name="address"
          />
          <input
            className="h-10 rounded-md bg-[#F0F5FF] px-2"
            placeholder="Phone Number"
            name="phone"
          />
          <input
            className="h-10 rounded-md bg-[#F0F5FF] px-2"
            placeholder="Landmark"
            name="landmark"
          />
          <div className="flex gap-2 w-full">
            <input
              className="h-10 flex-1 rounded-md bg-[#F0F5FF] px-2"
              placeholder="City"
              name="city"
            />
            <input
              className="h-10 flex-1 rounded-md bg-[#F0F5FF] px-2"
              placeholder="State"
              name="state"
            />
          </div>
          <button className="bg-[#2A55E5] px-2 py-1 w-full text-white text-sm h-10">
            Proceed To Payment
          </button>
        </form>
      </div>
    </div>
  );
}
