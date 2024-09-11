import React, { useRef, useState } from "react";
import Container from "../ui/container";
import { DURATION, EASE, Flip, gsap } from "@/lib/gsap/gsap";
import useIsomorphicLayoutEffect from "@/lib/gsap/hooks/useIsomorphicLayoutEffect";
import Paragraph from "../type/paragraph";

const images = [
  {
    id: 1,
    image:
      "https://images.beta.cosmos.so/5667ce27-cb38-455c-b7e8-f4f065038a0d?format=jpeg",
    alt: "Image 1",
    name: "angelica 1099, bella vista",
    info: "02 12 24",
  },
  {
    id: 2,
    image:
      "https://images.beta.cosmos.so/6a9a7044-e4c1-4490-9224-99a04a727c06?format=jpeg",
    alt: "Image 2",
    name: "el rosario, villa allende",
    info: "06 03 22",
  },
  {
    id: 3,
    image:
      "https://images.beta.cosmos.so/d43b5074-c0ae-4a4b-876a-f1b7b6d0c536?format=jpeg",
    alt: "Image 3",
    name: "el remanso, blanca escalada",
    info: "02 09 24",
  },
  {
    id: 4,
    image:
      "https://images.beta.cosmos.so/91069165-62ef-465b-8b61-2f2a80650393?format=jpeg",
    alt: "Image 4",
    name: "lisboa, portugal",
    info: "07 08 21",
  },
  {
    id: 5,
    image:
      "https://images.beta.cosmos.so/a3e908b2-ef60-495d-84cb-881395a5a251?format=jpeg",
    alt: "Image 5",
    name: "armenia 570, palermo",
    info: "10 01 22",
  },
  {
    id: 6,
    image:
      "https://images.beta.cosmos.so/f2be9e2c-a78e-4ca9-b451-e5492ef44951?format=jpeg",
    alt: "Image 6",
    name: "san martin de tours, misiones",
    info: "22 12 24",
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
      left: "75%",
      xPercent: -75,
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
            gsap.set(img, {
              zIndex: 1,
              pointerEvents: "auto",
              cursor: "pointer",
            });
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
      onClick={handleContainerClick}
      className="flex-shrink-0 w-svw grid-rows-6"
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
              ? "col-start-4"
              : index === 5
              ? "col-start-9"
              : ""
          } row-span-2 ${expandedId === img.id ? "expanded" : ""}`}
        >
          <img
            onClick={(e) => handleImageClick(img.id, e)}
            ref={(el) => setImageRef(el, index)}
            src={img.image}
            alt={img.alt}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-1/2 -right-[calc(100%-17.92rem*2)] w-full p-4 image-info opacity-0">
            {expandedId === img.id && (
              <>
                <Paragraph
                  triggerOnScroll={false}
                  delayed={false}
                  text={img.name}
                  className="text-h5 font-semibold tracking-tighter uppercase"
                />
                <Paragraph
                  text={img.info}
                  triggerOnScroll={false}
                  delayed={false}
                  className="text-h5 font-mono"
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
