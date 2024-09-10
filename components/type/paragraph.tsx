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
  const linesRef = useRef<HTMLElement[]>([]);

  useIsomorphicLayoutEffect(() => {
    if (paragraphRef.current) {
      const splitted = new SplitType(paragraphRef.current, {
        types: "lines",
        lineClass: "splitLine",
        absolute: false,
      });

      linesRef.current = splitted.lines || [];

      linesRef.current.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";
        wrapper.style.position = "relative";
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      gsap.fromTo(
        linesRef.current,
        { y: 300, skewY: 8 },
        {
          scrollTrigger: {
            trigger: paragraphRef.current,
            once: true,
          },
          y: 0,
          skewY: 0,
          ease: EASE,
          duration: DURATION * 3,
          stagger: 0.03,
          delay: DURATION * 1.2,
        }
      );
    }

    return () => {
      gsap.killTweensOf(linesRef.current);
    };
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