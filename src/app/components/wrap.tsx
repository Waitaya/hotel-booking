import React from "react";

const Wrap = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="pt-4 lg:pl-[30px] lg:pt-11 max-h-screen overflow-y-auto">{children}</div>;
};

export default Wrap;
