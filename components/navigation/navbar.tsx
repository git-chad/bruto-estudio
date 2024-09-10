import React from "react";
import ActionFlip from "../ui/action-flip";

const Navbar = () => {
  return (
    <header className="z-[9999] fixed top-0 left-0 w-full flex items-center justify-between px-5 pt-5">
      <p>ESTUDIO WELFORD</p>
      <ActionFlip label="MENU" button={true} />
    </header>
  );
};

export default Navbar;
