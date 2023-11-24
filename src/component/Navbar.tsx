import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 w-full md:h-24 flex">
      {/* logo */}
      <div className="h-full w-full flex items-center justify-between  text-red-500 p-2 border-b-2 border-red-500 uppercase lg:px-20  xl:px-40">
        {/* left links */}

        <div className="hidden md:flex  gap-4 flex-1">
          <Link href="/" className="">
            Homepage
          </Link>
          <Link href="/menu" className="">
            Menu
          </Link>
          <Link href="/" className="">
            Contact
          </Link>
        </div>
        {/* logo */}
        <Link href="/" className="text-2xl md:font-bold flex-1 md:text-center">
          Massimo
        </Link>
        {/* mobile menu */}
        <Menu />
        <div className="hidden md:flex items-center gap-5 flex-1 justify-end">
          <div className="md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
            <Image src="/phone.png" alt="" width={20} height={20} />
            <span>123 456 876</span>
          </div>
          <Link href={user ? "/orders" : "/login"}>
            {user ? <span>Orders</span> : <span>Login</span>}
          </Link>
          <CartIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
