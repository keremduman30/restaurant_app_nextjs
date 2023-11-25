"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
type SliderType = {
  id: number;
  title: string;
  image: string;
};
const data: SliderType[] = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];
const Slider = () => {
  const [currentSlice, setcurrentSlide] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setcurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row  ">
      {/* Text container */}
      <div className="flex-1  flex items-center justify-center flex-col gap-8 font-bold text-red-500 ">
        <h1 className="text-5xl text-center uppercase p-4 md:text-6xl md:p-10 xl:text-7xl">
          {data[currentSlice].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>
      {/* image container */}
      <div className="flex-1 w-full  relative ">
        <Image
          src={data[currentSlice].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
