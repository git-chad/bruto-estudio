import React from "react";
import Container from "../ui/container";
import { EASE, gsap } from "@/lib/gsap/gsap";

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
  
  return (
    <Container className="flex-shrink-0 w-svw grid-rows-6 py-5">
      <div className="ignore col-span-12 row-span-1" />

      {images.map((img, index) => (
        <div
          key={img.id}
          className={`bg-black col-span-2 ${
            index === 1
              ? "col-start-4"
              : index === 2
              ? "col-start-9"
              : index === 4
              ? "col-start-1"
              : index === 5
              ? "col-start-7"
              : ""
          } row-span-2`}
        >
          <img
            src={img.image}
            alt={img.alt}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </Container>
  );
};

export default FirstSlide;
