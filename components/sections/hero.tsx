"use client";
import { useRef } from "react";
import Image from "next/image";
import brutoWhite from "@/public/svgs/bruto-white.svg";
import heroImg from "@/public/images/ph1.jpg";
import useIsomorphicLayoutEffect from "@/lib/gsap/hooks/useIsomorphicLayoutEffect";
import { gsap, Flip, EASE } from "@/lib/gsap/gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ paused: true });

    const setInitialStates = () => {
      gsap.set(imageRef.current, { scale: 1.1 });
    };

    const animateHero = () => {
      const state = Flip.getState(heroRef.current);

      gsap.set(heroRef.current, {
        width: "calc(100vw - 40px)",
        height: "calc(100vh - 120px)",
      });

      Flip.from(state, {
        duration: 1,
        ease: EASE,
      });
    };

    const animateImage = () => {
      gsap.fromTo(
        imageRef.current,
        {
          scale: 1.1,
        },
        {
          scale: 1,
          ease: EASE,
          duration: 1
        }
      );
    };

    tl.add(setInitialStates);
    tl.add(animateHero, "+=2.2");
    tl.add(animateImage);

    tl.play();

    return () => {
      tl.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-svh w-full flex justify-center items-center overflow-hidden"
    >
      <Image
        ref={imageRef}
        className="z-[1000] h-full w-full aspect-video object-cover"
        alt="Rendered image of a scandinavian living room"
        src={heroImg}
      />
      <Image
        alt="Bruto estudio logo"
        src={brutoWhite}
        className="z-[1001] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[640px]"
      />
    </section>
  );
};

export default Hero;
