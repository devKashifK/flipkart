import React, { useState } from "react";
import { Icon } from "@iconify/react";
export default function Header() {
  return (
    <div className="w-full py-3 flex justify-start items-start shadow-md px-2">
      <div className="flex gap-10">
        <img src="/flipLogo.svg" className="" alt="" />
        <div className="relative w-[500px] border-gray-300 bg-[#F0F5FF] rounded-md h-10 border flex gap-1 justify-center items-center px-4">
          <div className="">
            <Icon
              icon="material-symbols:search-rounded"
              style={{ fontSize: "22px" }}
              className="text-gray-600"
            />
          </div>
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full bg-transparent h-full outline-none border-none text-[16px] text-gray-600"
          />
        </div>
        <div className="flex gap-14 justify-between flex-1 items-center">
          <Login />
          <div className="cursor-pointer flex gap-2 justify-center items-center text-lg">
            <Icon
              icon={"material-symbols-light:garden-cart-outline"}
              style={{ fontSize: "22px" }}
            />
            Cart
          </div>
          <div className="cursor-pointer flex gap-2 justify-center items-center text-lg">
            <Icon
              icon={"material-symbols-light:featured-seasonal-and-gifts"}
              style={{ fontSize: "22px" }}
            />
            Become a Seller
          </div>

          <div className="cursor-pointer flex gap-2 justify-center items-center text-lg">
            <Icon icon={"ph:dots-three-vertical-light"} />
          </div>
        </div>
      </div>
    </div>
  );
}

const Login = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="relative z-10">
      <button
        onClick={() => setHover(!hover)}
        className={`flex gap-2 justify-center items-center bg-[#2874f0] px-2 py-1 text-white rounded-md ${
          hover ? "bg-[#1c56ac]" : ""
        }`}
      >
        <Icon icon={"carbon:user-avatar-filled"} className="pt-0.5" />
        Login
      </button>
      {hover && (
        <div className="absolute bg-white w-[300px] py-1 rounded-md top-10 left-0 shadow-md">
          <div className="w-full flex justify-between items-center py-2 border-b border-gray-300 px-3 ">
            <p>New Customer</p>
            <span className="text-[#2A55E5] font-bold text-lg cursor-pointer">
              Sign Up
            </span>
          </div>
          <div className="flex flex-col gap-1 px-3 mt-2">
            {subMenu.map((item) => (
              <div className="flex gap-2 justify-start items-center">
                <Icon icon={item.icon} style={{ color: "#9098a8" }} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const subMenu = [
  {
    id: 1,
    title: "My Profile",
    icon: "carbon:user-avatar-filled",
  },
  {
    id: 2,
    title: "Flipkart Plus Zone",
    icon: "material-symbols:add-rounded",
  },
  {
    id: 3,
    title: "Orders",
    icon: "material-symbols-light:orders-rounded",
  },
  {
    id: 4,
    title: "Wishlist",
    icon: "ic:sharp-favorite-border",
  },
  {
    id: 5,
    title: "Rewards",
    icon: "material-symbols:featured-seasonal-and-gifts-rounded",
  },
  {
    id: 6,
    title: "Gift Cards",
    icon: "material-symbols-light:credit-card-sharp",
  },
];
