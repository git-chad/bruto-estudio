import React from "react";
import Container from "../ui/container";

const FirstSlide = () => {
  return (
    <Container className="flex-shrink-0 w-svw grid-rows-6 py-5">
        <div className="col-span-12 row-span-1"/>

        <div className="bg-black col-span-2 row-span-2"/>
        <div className="bg-black col-span-2 col-start-4 row-span-2"/>
        <div className="bg-black col-span-2 col-start-9 row-span-2"/>
        <div className="bg-black col-span-2 row-span-2"/>
        <div className="bg-black col-span-2 col-start-1 row-span-2"/>
        <div className="bg-black col-span-2 col-start-7 row-span-2"/>
    </Container>
  );
};

export default FirstSlide;
