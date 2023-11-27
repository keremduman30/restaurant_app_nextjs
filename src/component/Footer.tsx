import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 flex items-center justify-between  text-red-600">
      <Link href="/" className="font-bold text-xl">
        Massimo
      </Link>
      <p className="uppercase">@ All RIGHTs reserved.</p>
    </div>
  );
};

export default Footer;
