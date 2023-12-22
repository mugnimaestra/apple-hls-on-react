/* eslint-disable @next/next/no-img-element */
import React from "react";
import SectionLayout from "./SectionLayout";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import ComparisonTable from "./ComparisonTable";

type Props = {
  scroll: (to: number) => void;
};

function SectionComparison({ scroll }: Props) {
  return (
    <>
      <ParallaxLayer offset={2} speed={0.1} onClick={() => scroll(3)}>
        <SectionLayout>
          <div className="flex w-full flex-col text-2xl space-y-3 md:space-y-5 md:text-4xl font-bold items-center relative">
            <p>Ricoh Theta SC 2</p>
            <p>VS</p>
            <p>Insta360 One X2</p>
            <div className=" absolute left-10 md:left-20 -top-72 md:-top-60 -rotate-[30deg]">
              <div className="relative md:w-[200px] md:h-[200px] w-[100px] h-[100px]">
                <Image
                  src="/assets/Ricoh.jpeg"
                  alt="Ricoh"
                  fill
                  sizes="(min-width: 768px) 300px, 100vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className=" absolute right-10 md:right-20 -bottom-72 md:-bottom-60 rotate-12 md:rotate-[30deg]">
              <div className="relative md:w-[200px] md:h-[200px] w-[100px] h-[100px]">
                <Image
                  src="/assets/Insta360.webp"
                  alt="Insta360"
                  fill
                  sizes="(min-width: 768px) 300px, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </SectionLayout>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.1} onClick={() => scroll(4)}>
        <SectionLayout>
          <div className="flex flex-col w-full text-2xl md:text-4xl font-bold items-start">
            <p className="mb-5 md:mb-10">Photo Quality</p>
            <img
              src="/assets/Comparison.jpg"
              alt="photo quality comparison"
              className="object-contain w-[1280px] h-auto"
            />
            <a
              href="https://spotbrowser.com/artykuly/ricoh-theta-cs2-vs-insta-360-one-x2/"
              target="_blank"
              className="mt-3 underline font-medium text-base text-center w-full"
            >
              Source
            </a>
          </div>
        </SectionLayout>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={0.1} onClick={() => scroll(5)}>
        <SectionLayout>
          <div className="flex flex-col w-full text-2xl md:text-4xl font-bold items-start">
            <p className="mb-5 md:mb-10">Video Quality</p>
            <div className="w-full h-auto md:w-[1280px] md:h-[600px]">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/kUpszwHhAmY`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </div>
        </SectionLayout>
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={0.1} onClick={() => scroll(6)}>
        <SectionLayout>
          <div className="flex flex-col w-full text-xl md:text-4xl items-start">
            <p className="mb-5 md:mb-10 font-bold">Comparison Table</p>
            <ComparisonTable />
          </div>
        </SectionLayout>
      </ParallaxLayer>
    </>
  );
}

export default SectionComparison;
