import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({children, className}: Props) => {
  return (
    <div className={`mx-auto w-full px-5 grid grid-cols-12 gap-4 ${className}`}>
        {children}
    </div>
  );
};

export default Container;
