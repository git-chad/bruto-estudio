import React, { useRef, useState } from "react";
import Container from "../ui/container";
import { EASE, gsap, Flip, DURATION } from "@/lib/gsap/gsap";
import useIsomorphicLayoutEffect from "@/lib/gsap/hooks/useIsomorphicLayoutEffect";
import SplitType from "split-type";

const images = [
  {
    id: 1,
    image:
      "https://images.beta.cosmos.so/9c530531-e780-4c03-9b44-1e3099946ca4.?format=jpeg",
    alt: "Image 1",
  },
  {
    id: 2,
    image:
      "https://images.beta.cosmos.so/99892fbc-5ed5-4349-8053-3914ac7f1de3?format=jpeg",
    alt: "Image 2",
  },
  {
    id: 3,
    image:
      "https://images.beta.cosmos.so/a8f0be5c-7da1-4093-a735-85b4f10d1a2d?format=jpeg",
    alt: "Image 3",
  },
  {
    id: 4,
    image:
      "https://images.beta.cosmos.so/7f29ebf1-9a39-4cc4-afaa-b628040d04f2?format=jpeg",
    alt: "Image 4",
  },
  {
    id: 5,
    image:
      "https://images.beta.cosmos.so/72dcd88b-e1aa-4244-8f4e-bdc44ed943d8?format=jpeg",
    alt: "Image 5",
  },
  {
    id: 6,
    image:
      "https://images.beta.cosmos.so/fdaa13e5-c9c9-471a-af11-62dcc8b132c0.?format=jpeg",
    alt: "Image 6",
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
    const title = image.parentElement?.querySelector(
      ".image-info"
    ) as HTMLElement;

    gsap.set(image, { zIndex: 1000 });

    imageRefs.current.forEach((img, index) => {
      if (img && index !== id - 1) {
        gsap.set(img, { zIndex: 1 });
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
      onComplete: () => {
        // Animate title and info in after the image has expanded
        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: EASE }
          );
        }
      },
    });
  };

  const collapseImage = (image: HTMLImageElement) => {
    const title = image.parentElement?.querySelector(
      ".image-info"
    ) as HTMLElement;

    if (title) {
      gsap.to(title, {
        opacity: 0,
        y: 20,
        duration: DURATION / 2,
        ease: EASE,
        onComplete: () => {
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
              // Reset z-index after collapsing
              setExpandedId(null);
              imageRefs.current.forEach((img) => {
                if (img) {
                  gsap.set(img, { zIndex: 1 });
                }
              });
            },
          });
        },
      });
    }
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
      className="relative flex-shrink-0 w-svw grid-rows-6 py-5"
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
          <div className="absolute bottom-1/2 left-xxxlarge w-full p-4 image-info opacity-0">
            <h2 className="text-xl">{img.alt}</h2>
            <p className="text-sm">
              Some additional information, such a cool place to visit I had so
              much fun building this shit.
            </p>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default FirstSlide;
