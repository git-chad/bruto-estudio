import React from "react";
import Container from "../ui/container";

const images = [
  { id: 1, image: "https://images.beta.cosmos.so/5667ce27-cb38-455c-b7e8-f4f065038a0d?format=jpeg", alt: "Image 1" },
  { id: 2, image: "https://images.beta.cosmos.so/6a9a7044-e4c1-4490-9224-99a04a727c06?format=jpeg", alt: "Image 2" },
  { id: 3, image: "https://images.beta.cosmos.so/d43b5074-c0ae-4a4b-876a-f1b7b6d0c536?format=jpeg", alt: "Image 3" },
  { id: 4, image: "https://images.beta.cosmos.so/91069165-62ef-465b-8b61-2f2a80650393?format=jpeg", alt: "Image 4" },
  { id: 5, image: "https://images.beta.cosmos.so/a3e908b2-ef60-495d-84cb-881395a5a251?format=jpeg", alt: "Image 5" },
  { id: 6, image: "https://images.beta.cosmos.so/f2be9e2c-a78e-4ca9-b451-e5492ef44951?format=jpeg", alt: "Image 6" },
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
              ? "col-start-4"
              : index === 5
              ? "col-start-9"
              : ""
          } row-span-2`}
        >
          <img src={img.image} alt={img.alt} className="object-cover w-full h-full" />
        </div>
      ))}
    </Container>
  );
};

export default FirstSlide;
