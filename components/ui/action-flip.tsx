import Link from "next/link";
import React from "react";

type Props = {
  label: string;
  button: boolean;
  href?: string;
};

const ActionFlip = ({ label, button, href }: Props) => {
  if (button) {
    return (
      <button className="relative min-w-max h-4 overflow-hidden leading-none group">
        <div className="relative">
          <p className="group-hover:-translate-y-full transition-transform ease-in-out duration-500 transform origin-bottom-left">
            {label}
          </p>
          <p className="group-hover:-translate-y-full blur-[1px] group-hover:blur-none skew-y-[16deg] group-hover:skew-y-0 transition-all ease-in-out duration-500 transform origin-bottom-left">
            {label}
          </p>
        </div>
      </button>
    );
  }

  return (
    <Link
      href={href!}
      className="relative min-w-max h-4 overflow-hidden leading-none group"
    >
      <div className="relative">
        <p className="group-hover:-translate-y-full transition-transform ease-in-out duration-500 transform origin-bottom-left">
          {label}
        </p>
        <p className="group-hover:-translate-y-full blur-[1px] group-hover:blur-none skew-y-[16deg] group-hover:skew-y-0 transition-all ease-in-out duration-500 transform origin-bottom-left">
          {label}
        </p>
      </div>
    </Link>
  );
};

export default ActionFlip;
