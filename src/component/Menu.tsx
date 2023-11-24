"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";
type MenuType = {
  id: number;
  title: string;
  url: string;
};
const list: MenuType[] = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [click, setClick] = useState<boolean>(false);
  const user = false;
  return (
    <div onClick={() => setClick(!click)} className="md:hidden">
      <Image
        src={click ? "/close.png" : `/open.png`}
        width={20}
        height={20}
        alt=""
      />
      {click && (
        <div className=" absolute left-0 right-0 top-24 w-screen h-[calc(100vh-6rem)] bg-red-500 text-white flex flex-col justify-center items-center gap-7 z-10">
          {list.map((e) => (
            <Link href={e.url} key={e.id} onClick={() => setClick(!open)}>
              {e.title}
            </Link>
          ))}
          <Link
            href={user ? "/orders" : "/login"}
            onClick={() => setClick(!open)}
          >
            {user ? <span>Orders</span> : <span>Login</span>}
          </Link>
          <CartIcon />
        </div>
      )}
    </div>
  );
};

export default Menu;
