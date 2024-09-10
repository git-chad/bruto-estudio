import React, { forwardRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const Container = forwardRef<HTMLDivElement, Props>(
  ({ children, className, onClick }, ref) => {
    return (
      <div
        ref={ref}
        className={`mx-auto w-full px-5 grid grid-cols-12 gap-4 ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
