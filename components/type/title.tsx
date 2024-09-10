"use client";
import useIsomorphicLayoutEffect from "@/lib/gsap/hooks/useIsomorphicLayoutEffect";
import SplitType from "split-type";
import React, { useRef } from "react";
import { gsap } from "@/lib/gsap/gsap";
import { DURATION, EASE } from "@/lib/gsap/gsap";

type Props = {
  text: string;
  className?: string;
  firstLineIndent?: boolean;
  indentSizeMultiplier?: number | string;
};

const Title = ({
  text,
  className,
  firstLineIndent = false,
  indentSizeMultiplier = "2em",
}: Props) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLElement[]>([]);

  const indentSize = `calc(${indentSizeMultiplier} * (3vw * 1.767))`;

  useIsomorphicLayoutEffect(() => {
    if (titleRef.current) {
      const splitted = new SplitType(titleRef.current, {
        types: "lines",
        lineClass: "splitLine",
        absolute: false,
      });

      linesRef.current = splitted.lines || [];

      linesRef.current.forEach((line, index) => {
        const wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";
        wrapper.style.position = "relative";
        if (firstLineIndent && index === 0) {
          wrapper.style.textIndent =
            typeof indentSize === "number" ? `${indentSize}px` : indentSize;
        }
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      gsap.fromTo(
        linesRef.current,
        { y: "100%" },
        {
          scrollTrigger: {
            trigger: titleRef.current,
            once: true,
          },
          y: 0,
          ease: EASE,
          duration: DURATION * 4,
          stagger: 0.03,
        }
      );
    }

    return () => {
      gsap.killTweensOf(linesRef.current);
    };
  }, [text, firstLineIndent, indentSize]);

  return (
    <div className="overflow-hidden">
      <div
        ref={titleRef}
        className={`font-semibold tracking-tighter mt-20 uppercase ${className}`}
        style={{
          fontSize: "calc(3vw * 1.767)",
          lineHeight: "0.93",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Title;
