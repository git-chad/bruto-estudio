"use client";
import React, { useState } from "react";
import FirstSlide from "../slideshow/first-slide";
import SecondSlide from "../slideshow/second-slide";

const Slideshow = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative h-screen w-svw flex">
      <nav className="z-50 flex items-center justify-between w-20 absolute bottom-5 left-1/2 -translate-x-1/2">
        <button
          className={`transition-colors ${
            active === 0 ? "text-black" : "text-black/30"
          }`}
          onClick={() => setActive(0)}
        >
          01
        </button>
        <button
          className={`transition-colors ${
            active === 1 ? "text-black" : "text-black/30"
          }`}
          onClick={() => setActive(1)}
        >
          02
        </button>
      </nav>

      <div
        className={`flex h-full -translate-x-1/2 transition-transform bg-transparent [transition-timing-function:_cubic-bezier(0.77,0,0.18,1)] duration-1000 ${
          active === 0 ? "translate-x-0" : "-translate-x-1/2"
        }`}
      >
        <FirstSlide />
        <SecondSlide />
      </div>
    </section>
  );
};

export default Slideshow;
