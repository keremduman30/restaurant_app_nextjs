"use client";
import React, { useEffect, useState } from "react";
type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};
const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [options, price, quantity, selected]);

  const handler = (value: string) => {
    if (value === "a") {
      setQuantity(quantity < 10 ? quantity + 1 : 10);
    } else {
      setQuantity(quantity > 1 ? quantity - 1 : 1);
    }
  };
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* options container */}
      <div className="flex gap-5 items-center ">
        {options?.map((e, i) => (
          <button
            onClick={() => setSelected(i)}
            key={e.title}
            className={`min-w-[6rem]  p-2  ring-1 ring-red-400 rounded-md hover:bg-red-500 hover:text-white ${
              selected === i && "bg-red-400 text-white"
            }`}
          >
            {e.title}
          </button>
        ))}
      </div>
      {/* add container  */}
      <div className="flex items-center justify-between  h-14">
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500 ">
          <span>Quantity</span>
          <div className="flex items-center gap-2 text-xl">
            <button onClick={() => handler("d")}>{"<"}</button>
            <span>{quantity}</span>
            <button onClick={() => handler("a")}>{">"}</button>
          </div>
        </div>
        <button className="uppercase w-56 h-14 p-3 bg-red-500 text-white ring-1 ring-red-500">
          Add to card
        </button>
      </div>
    </div>
  );
};

export default Price;
