import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCategory = () => {
  return (
    <div className="flex flex-wrap text-red-500 ">
      {pizzas.map((e) => (
        <Link
          key={e.id}
          href={`/product/${e.id}`}
          className="w-full h-[60vh] border-r-2 border-b-2  border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between even:bg-fuchsia-50  group"
        >
          {e.img && (
            <div className="relative h-[80%]">
              <Image src={e.img} alt="" fill className="object-contain" />
            </div>
          )}
          <div className=" flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{e.title}</h1>
            <h2 className="group-hover:hidden text-xl">${e.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Add to card
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SingleCategory;
