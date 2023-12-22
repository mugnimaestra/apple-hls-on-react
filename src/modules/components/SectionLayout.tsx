import React from "react";

type Props = {
  children: React.ReactNode;
};

function SectionLayout({ children }: Props) {
  return (
    <div className="w-full flex justify-center items-center md:pt-0 pt-5">
      <div className="min-h-screen max-w-7xl flex flex-col justify-center px-5 w-full">
        {children}
      </div>
    </div>
  );
}

export default SectionLayout;
