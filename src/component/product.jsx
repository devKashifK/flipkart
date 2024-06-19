import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Product({
  title,
  img,
  price,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    const product = { title, img, price };
    localStorage.setItem("detail", JSON.stringify(product));
    navigate("/details");
  };
  return (
    <div className="border border-gray-200 shadow-md h-[290px] flex flex-col  gap-2 justify-center items-center rounded-md  py-1 w-[200px]">
      <div className="px-2 flex justify-center items-center">
        <img src={img} className="h-[160px] w-[80%]" />
      </div>
      <div className="flex w-full px-3 flex-col gap-1 justify-start items-start">
        <div className="flex flex-col gap-1">
          <TruncatedTitle title={title} />
          <p className="text-left text-black font-semi-bold">₹{price}</p>
        </div>
        <button
          className="bg-[#F5EB2E] px-2 py-1 w-full text-sm"
          onClick={() => handleClick()}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

function TruncatedTitle({
  title,
  maxLength = 18,
}: {
  title: string;
  maxLength?: number;
}) {
  const [truncatedTitle, setTruncatedTitle] = useState(title);

  useEffect(() => {
    if (title.length > maxLength) {
      const newTitle = title.substring(0, maxLength - 3) + "...";
      setTruncatedTitle(newTitle);
    } else {
      setTruncatedTitle(title);
    }
  }, [title, maxLength]);

  return <h2 className="text-light">{truncatedTitle}</h2>;
}
