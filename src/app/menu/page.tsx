import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="flex flex-col md:flex-row items-center h-[calc(100vh-3rem)] md:h-[calc(100vh-9rem)] p-4 lg:px-20 xl:px-40">
      {menu.map((item) => (
        <Link
          key={item.id}
          href={`/menu/${item.slug}`}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className={`text-${item.color} w-1/2 `}>
            <h1 className="uppercase font-bold text-3xl ">{item.title}</h1>
            <p className="text-sm my-8">{item.desc}</p>
            <button
              className={`hidden 2xl:block  text-black   py-2 px-4 rounded-md`}
              style={{
                backgroundColor: `${item.color}`,
                color: `${item.color === "black" ? "white" : "red"}`,
              }}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
