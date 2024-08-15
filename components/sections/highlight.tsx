import React from "react";
import Container from "../ui/container";
import Title from "../type/title";
import Paragraph from "../type/paragraph";

const Highlight = () => {
  return (
    <section className=" w-full min-h-[400svh]">
      <Container className="min-h-screen grid grid-cols-12">
        <div className="col-span-5">
          <div className="sticky top-20 left-0 flex flex-col">
            <Title text="highlights" />
            {/* className="uppercase text-[min(3.5vw,2.5rem)] 2xl:leading-9 mt-[65px]" */}
            <Paragraph
            className="uppercase text-[min(3.5vw,2.5rem)]"
              text="Striking, innovative design stands tall in the heart of Palermo's
              vibrant art district. The building's dynamic architecture offers
              expansive interior spaces and exceptional appeal through advanced
              engineering and craftsmanship."
            />
          </div>
        </div>
        <div className="col-start-7 col-span-6 grid grid-cols-6 gap-4">
          <div className="bg-black w-full col-span-6 mt-20 aspect-square" />
          <div className="bg-black w-full col-span-6 mt-20 aspect-square" />
          <div className="bg-black w-full col-span-6 mt-20 aspect-square" />
        </div>
      </Container>
    </section>
  );
};

export default Highlight;
