"use client";

import { IParallax, Parallax } from "@react-spring/parallax";
import SectionHLS from "../components/SectionHLS";
import React, { useRef, useState, useEffect } from "react";

function HomePage() {
  const parallax = useRef<IParallax>(null);
  const [page, setPage] = useState(0);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setPage((prevPage) => Math.min(prevPage + 1, 3)); // assuming you have 4 pages
      } else if (event.key === 'ArrowLeft') {
        setPage((prevPage) => Math.max(prevPage - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    scroll(page);
  }, [page]);

  return (
    <main className="flex justify-center w-full h-full">
      <div className="w-full">
        {/* Content */}
        <Parallax ref={parallax} pages={4}>
          <SectionHLS scroll={scroll} />
        </Parallax>
      </div>
    </main>
  );
}

export default HomePage;
