"use client";
import useIsomorphicLayoutEffect from "@/lib/gsap/hooks/useIsomorphicLayoutEffect";
import React, { useRef } from "react";
import { DURATION, EASE, gsap } from "@/lib/gsap/gsap";

type Props = {
  text: string;
};

const Title = ({ text }: Props) => {
  const titleRef = useRef<HTMLParagraphElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        scrollTrigger: titleRef.current,
        y: 0,
        ease: EASE,
        duration: DURATION * 2,
      });
    }
  }, [text]);

  return (
    <div className="overflow-clip">
      <p
        ref={titleRef}
        className="text-[7.2vw] font-semibold tracking-tighter mt-20 uppercase translate-y-full"
      >
        {text}
      </p>
    </div>
  );
};

export default Title;
