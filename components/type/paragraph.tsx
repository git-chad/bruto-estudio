"use client";
import useIsomorphicLayoutEffect from "@/lib/gsap/hooks/useIsomorphicLayoutEffect";
import SplitType from "split-type";
import React, { useRef } from "react";
import { gsap } from "@/lib/gsap/gsap";
import { DURATION, EASE } from "@/lib/gsap/gsap";

type Props = {
  text: string;
  className?: string;
};

const Paragraph = ({ text, className }: Props) => {
  const paragraphRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (paragraphRef.current) {
      const splitted = new SplitType(paragraphRef.current, {
        types: "lines",
        lineClass: "splitLine",
        absolute: false,
      });

      splitted.lines?.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";
        wrapper.style.position = "relative";
        wrapper.appendChild(line);
        paragraphRef.current?.appendChild(wrapper);
      });

      gsap.fromTo(
        ".splitLine",
        { y: 300, skewY: 8 },
        {
          scrollTrigger: paragraphRef.current,
          y: 0,
          skewY: 0,
          ease: EASE,
          duration: DURATION * 3,
          stagger: 0.03,
          delay: DURATION * 1.2,
        }
      );
    }
  }, [text]);

  return (
    <div className="overflow-hidden">
      <div
        ref={paragraphRef}
        className={`tracking-tighter relative ${className}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Paragraph;
