import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen  overflow-x-scroll text-red-500 ">
      <div className="w-max flex">
        {featuredProducts.map((e) => (
          <div
            key={e.id}
            className="w-screen h-[60vh]  flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50  md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {e.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={e.img} alt="" fill className="object-contain" />
              </div>
            )}
            <div className="flex-1 flex flex-col gap-5 items-center justify-center text-center  w-full mt-2  ">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl ">
                {e.title}
              </h1> 
              <p className="p-4 2xl:p-8">{e.desc}</p>
              <span className="text-xl font-bold">${e.price}</span>
              <button className="bg-red-500 text-white rounded-md p-2">
                Add to Card
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
