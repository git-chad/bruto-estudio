import React, { useRef, useState } from "react";
import Container from "../ui/container";
import { EASE, gsap, Flip, DURATION } from "@/lib/gsap/gsap";
import useIsomorphicLayoutEffect from "@/lib/gsap/hooks/useIsomorphicLayoutEffect";
import Paragraph from "../type/paragraph";

const images = [
  {
    id: 1,
    image:
      "https://images.beta.cosmos.so/9c530531-e780-4c03-9b44-1e3099946ca4.?format=jpeg",
    alt: "Image 1",
    name: "San justo 2249, bella vista",
    info: "09 08 24",
  },
  {
    id: 2,
    image:
      "https://images.beta.cosmos.so/99892fbc-5ed5-4349-8053-3914ac7f1de3?format=jpeg",
    alt: "Image 2",
    name: "santa fe 1465, buenos aires",
    info: "15 03 25",
  },
  {
    id: 3,
    image:
      "https://images.beta.cosmos.so/a8f0be5c-7da1-4093-a735-85b4f10d1a2d?format=jpeg",
    alt: "villa general paz, cordoba",
    name: "villa general paz, cordoba",
    info: "22 11 24",
  },
  {
    id: 4,
    image:
      "https://images.beta.cosmos.so/7f29ebf1-9a39-4cc4-afaa-b628040d04f2?format=jpeg",
    alt: "Image 4",
    name: "talar del lago, pilar",
    info: "07 06 25",
  },
  {
    id: 5,
    image:
      "https://images.beta.cosmos.so/72dcd88b-e1aa-4244-8f4e-bdc44ed943d8?format=jpeg",
    alt: "Image 5",
    name: "praderas del lago IV, fatima",
    info: "30 09 24",
  },
  {
    id: 6,
    image:
      "https://images.beta.cosmos.so/fdaa13e5-c9c9-471a-af11-62dcc8b132c0.?format=jpeg",
    alt: "Senderos III, costa esmeralda",
    name: "Senderos III, costa esmeralda",
    info: "18 12 24",
  },
];

const FirstSlide = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const setImageRef = React.useCallback(
    (el: HTMLImageElement | null, index: number) => {
      imageRefs.current[index] = el;
    },
    []
  );

  const handleImageClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const clickedImage = imageRefs.current[id - 1];

    if (clickedImage) {
      if (expandedId === id) {
        collapseImage(clickedImage);
      } else {
        expandImage(clickedImage, id);
      }
    }
  };

  const expandImage = (image: HTMLImageElement, id: number) => {
    gsap.set(image, { zIndex: 1000 });

    imageRefs.current.forEach((img, index) => {
      if (img && index !== id - 1) {
        gsap.set(img, { zIndex: 1, pointerEvents: "none", cursor: "auto" });
      }
    });

    const state = Flip.getState(image);
    setExpandedId(id);

    gsap.set(image, {
      position: "fixed",
      top: "50%",
      left: "25%",
      xPercent: -25,
      yPercent: -50,
      width: "30%",
      height: "90%",
    });

    Flip.from(state, {
      duration: DURATION,
      ease: EASE,
    });

    const imageInfo = image.parentElement?.querySelector(
      ".image-info"
    ) as HTMLElement;
    if (imageInfo) {
      gsap.to(imageInfo, { opacity: 1, duration: DURATION / 2 });
    }
  };

  const collapseImage = (image: HTMLImageElement) => {
    const imageInfo = image.parentElement?.querySelector(
      ".image-info"
    ) as HTMLElement;
    if (imageInfo) {
      gsap.to(imageInfo, { opacity: 0, duration: DURATION / 2 });
    }

    const state = Flip.getState(image);
    gsap.set(image, {
      clearProps: "position,top,left,xPercent,yPercent,width,height",
      zIndex: 1000,
    });

    Flip.from(state, {
      duration: DURATION,
      ease: EASE,
      onComplete: () => {
        gsap.set(image, {
          clearProps:
            "zIndex, position, top, left, xPercent, yPercent, width, height",
        });
        setExpandedId(null);
        imageRefs.current.forEach((img) => {
          if (img) {
            gsap.set(img, { zIndex: 1, pointerEvents: "auto", cursor: "pointer" });
          }
        });
      },
    });
  };

  const handleContainerClick = () => {
    if (expandedId !== null) {
      const expandedImage = imageRefs.current[expandedId - 1];
      if (expandedImage) {
        collapseImage(expandedImage);
      }
    }
  };

  useIsomorphicLayoutEffect(() => {
    if (containerRef.current) {
      gsap.to(
        containerRef.current.querySelectorAll(".image-wrapper:not(.expanded)"),
        {
          opacity: expandedId ? 0 : 1,
          duration: DURATION,
        }
      );
    }
  }, [expandedId]);

  return (
    <Container
      ref={containerRef}
      className="relative flex-shrink-0 w-svw grid-rows-6"
      onClick={handleContainerClick}
    >
      <div className="ignore col-span-12 row-span-1" />

      {images.map((img, index) => (
        <div
          key={img.id}
          className={`image-wrapper border border-dashed cursor-pointer col-span-2 ${
            index === 1
              ? "col-start-4"
              : index === 2
              ? "col-start-9"
              : index === 4
              ? "col-start-1"
              : index === 5
              ? "col-start-7"
              : ""
          } row-span-2 ${expandedId === img.id ? "expanded" : ""}`}
        >
          <img
            ref={(el) => setImageRef(el, index)}
            src={img.image}
            alt={img.alt}
            className="object-cover w-full h-full"
            onClick={(e) => handleImageClick(img.id, e)}
          />
          <div className="absolute bottom-1/2 left-xxlarge 2xl:left-xxxlarge min-w-small p-4 image-info opacity-0">
            {expandedId === img.id && (
              <>
                <Paragraph
                  triggerOnScroll={false}
                  delayed={false}
                  text={img.name}
                  className="2xl:text-h5 font-semibold tracking-tighter uppercase"
                />
                <Paragraph
                  text={img.info}
                  triggerOnScroll={false}
                  delayed={false}
                  className="2xl:text-h5"
                />
              </>
            )}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default FirstSlide;
