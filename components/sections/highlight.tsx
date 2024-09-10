import React from "react";
import Container from "../ui/container";
import Title from "../type/title";
import Paragraph from "../type/paragraph";

const Highlight = () => {
  return (
    <section className="w-full flex flex-col py-xxxlarge">
      <Container className="grid grid-cols-12">
        <div className="col-span-12">
          <Title
            firstLineIndent
            indentSizeMultiplier={1.45}
            className="text-h3 leading-[93%] col-span-12"
            text="es facil olvidarse de tus suenos. nosotros los materializamos."
          />
        </div>
        <div className="col-span-6 col-start-7 mt-medium">
          <Paragraph
            className="text-pretty 2xl:text-h5"
            text="En Welford, materializamos ideas y emociones. Creamos espacios que reflejan la esencia de nuestros clientes, combinando funcionalidad y estética. Nuestro enfoque es directo, moderno y enraizado en el diseño contemporáneo argentino."
          />
        </div>
        <div className="col-span-6 grid grid-cols-6 place-content-end">
          <p className="font-semibold tracking-tighter col-span-2 2xl:text-h5">
            PROJECT 01
          </p>
          <p className="col-span-4 text-pretty tracking-tighter 2xl:text-h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            suscipit, sapien sed tincidunt eleifend, lorem ligula sodales dui,
            eget viverra lorem lectus ac nisi. Integer at erat non metus
            efficitur tincidunt. Sed scelerisque libero quis
          </p>
        </div>
        <div className="aspect-video bg-black col-span-6 col-start-7 mt-xxxlarge" />
      </Container>
    </section>
  );
};

export default Highlight;
