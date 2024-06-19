import React from "react";
import Header from "../component/header";

export default function Checkout() {
  const data = JSON.parse(localStorage.getItem("detail")) || [];
  console.log(data);
  return (
    <div className="flex flex-col  justify-start items-start w-full h-screen">
      <Header />
      <div className="border flex flex-col gap-8 border-gray-300 rounded-md w-[60%] mx-auto mt-6  pt-4">
        <div className="flex justify-between items-center px-4">
          <div className="flex flex-col gap-1 justify-start px-4">
            <p className="text-sm text-left">{data.title}</p>
            <p className="text-sm text-left font-bold">₹{data.price}</p>
          </div>
          <img src={data.img} alt="" className="w-28 h-20" />
        </div>
        <div className="flex flex-col gap-2 justify-start px-6">
          <div className="text-left flex justify-between w-full">
            Name :
            <span>
              {data.firstName} {data.lastName}
            </span>
          </div>
          <div className="text-left flex justify-between w-full">
            Email:
            <span> {data.email}</span>
          </div>
          <div className="text-left flex justify-between w-full">
            Mobile Number : <span>{data.phone}</span>
          </div>
          <div className="text-left flex justify-between w-full">
            Shipping Address :<span>{data.phone}</span>
          </div>
          <div className="text-left flex justify-between w-full">
            Mobile Number :<span> {data.phone}</span>
          </div>
        </div>
        <div className="flex gap-2 w-full justify-between items-end px-4 bg-[#2874F0] py-2 rounded-b-md">
          <div className="flex justify-start items-center h-full">
            <span className="text-white text-lg">
              Add UPI to make Payment Request
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <input
              className="h-6 rounded-md bg-[#F0F5FF] px-4"
              placeholder="UPI ID"
              name="firstName"
            />
            <button className="bg-white text-black h-8 flex justify-center items-center">
              Make Payment Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
