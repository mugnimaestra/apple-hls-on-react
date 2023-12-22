"use client";

import React, { useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import SectionHLS from "../components/SectionHLS";

function HomePage() {
  const parallax = useRef<IParallax>(null);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <main className="flex justify-center w-full h-full">
      <div className="w-full">
        {/* Content */}
        <Parallax ref={parallax} pages={12} className="no-scrollbar">
          <ParallaxLayer offset={0} speed={0.1} onClick={() => scroll(1)}>
            <SectionHLS scroll={scroll} />
          </ParallaxLayer>
        </Parallax>
      </div>
    </main>
  );
}

export default HomePage;
