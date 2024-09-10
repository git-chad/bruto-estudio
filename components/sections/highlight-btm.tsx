import React from "react";
import Container from "../ui/container";

const HighlightBottom = () => {
  return (
    <section className="w-full flex flex-col py-xxxlarge">
      <Container className="grid grid-cols-12">
        <div className="col-span-4">
          <div className="aspect-video bg-black" />
          <p className="font-semibold tracking-tighter col-span-2 mt-xsmall 2xl:text-h5">
            PROJECT 02
          </p>
          <p className="tracking-tighter 2xl:text-h5">
            Otra cocina mas pero mas oscurita. Esta ubicada en Mordor, habitada
            por una familia de hobbits extranjeros.
          </p>
        </div>
        <div className="col-span-6 col-start-7 grid grid-cols-6">
          <div className="aspect-[16/11] bg-black col-span-6" />
          <p className="font-semibold tracking-tighter col-span-6 mt-xsmall 2xl:text-h5">
            PROJECT 03
          </p>
          <p className="tracking-tighter col-span-4 2xl:text-h5">
            La misma cocina pero de otro angulo, esta muy sarpada como para no
            mostrarla dos veces.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HighlightBottom;
