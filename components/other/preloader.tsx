"use client";
import Image from "next/image";
import React, { useRef } from "react";
import brutoWhite from "@/public/svgs/bruto-white.svg";
import useIsomorphicLayoutEffect from "@/lib/gsap/hooks/useIsomorphicLayoutEffect";
import { gsap } from "@/lib/gsap/gsap";

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!preloaderRef.current || !logoRef.current) return;

    const tl = gsap.timeline({
      paused: true,
    });

    const setInitialStates = () => {
      return gsap.set(logoRef.current, { yPercent: 105 });
    };

    const animatePreloader = () => {
      return gsap.to(preloaderRef.current, { yPercent: -100, duration: 1.4 });
    };

    const animateLogo = () => {
      return gsap.to(logoRef.current, {
        yPercent: 0,
        duration: 0.8,
        delay: 0.2,
      });
    };

    const hideLogo = () => {
      return gsap.to(logoRef.current, { opacity: 0, duration: 0.2 });
    };

    tl.add(setInitialStates());
    tl.add(animateLogo());
    tl.add(animatePreloader());
    tl.add(hideLogo());

    tl.play();

    return () => {
      tl.revert();
    };
  }, []);
  
  return (
    <>
      <div
        ref={preloaderRef}
        className="z-[9999] bg-priblack min-h-screen w-screen fixed top-0 left-0"
      ></div>
      <div className="z-[9999] fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 overflow-clip">
        <Image ref={logoRef} alt="bruto studio logo" className="min-w-[640px] max-w-[640px]" src={brutoWhite} />
      </div>
    </>
  );
};

export default Preloader;
