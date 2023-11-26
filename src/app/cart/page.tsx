import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row  text-red-500  overflow-scroll">
      {/* product container */}
      <div className="h-1/2 p-4   flex flex-col justify-center lg:flex-[3] lg:h-full 2xl:flex-1  lg:px-20 xl:px-40 ">
        <div className="flex items-center justify-between mb-4  ">
          <Image
            src={"/temporary/p1.png"}
            alt=""
            width={100}
            height={100}
            className="object-contain"
          />
          <div>
            <h1 className="uppercase text-xl font-bold">SICILIAN PIZZA</h1>
            <span>Large</span>
          </div>
          <span className="font-bold">$24</span>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image
            src={"/temporary/p1.png"}
            alt=""
            width={100}
            height={100}
            className="object-contain"
          />
          <div>
            <h1 className="uppercase text-xl font-bold">SICILIAN PIZZA</h1>
            <span>Large</span>
          </div>
          <span className="font-bold">$24</span>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image
            src={"/temporary/p1.png"}
            alt=""
            width={100}
            height={100}
            className="object-contain"
          />
          <div>
            <h1 className="uppercase text-xl font-bold">SICILIAN PIZZA</h1>
            <span>Large</span>
          </div>
          <span className="font-bold">$24</span>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* payment container */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-5 justify-center lg:flex-[1] lg:h-full 2xl:flex-1 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
