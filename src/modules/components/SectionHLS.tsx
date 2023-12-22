"use client";

import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";
import SectionLayout from "./SectionLayout";

type Props = {
  scroll: (to: number) => void;
};

function SectionHLS({ scroll }: Props) {
  return (
    <>
      <ParallaxLayer offset={0} speed={0.1} onClick={() => scroll(1)}>
        <SectionLayout>
          {/* Title */}
          <div className="space-y-3 md:space-y-8 mb-7 md:mb-10">
            <h1 className="text-lg md:text-2xl font-bold md:underline underline-offset-8">
              Common display format for 360° images
            </h1>
            <p>
              There are different ways to show panoramic photos. Here&rsquo;s a
              quick look at <b>three</b> common methods:
            </p>
          </div>
          {/* Content */}
          <div className="flex flex-col md:flex-row md:space-x-5 md:space-y-0 space-y-5">
            <div className="flex flex-col gap-3 md:gap-5 flex-1">
              {/* Description */}
              <div>
                <h3 className="md:text-lg font-bold">
                  1. Equirectangular Projection
                </h3>
                <p className="mt-3">
                  The most common way to display a 360° image. The image is
                  displayed as a rectangle, but it&rsquo;s actually a sphere.
                </p>
              </div>
              {/* Image Sample */}
              <div className="w-full h-[200px] relative rounded-lg">
                <Image
                  src="/assets/Equirectangular.jpg"
                  alt="Equirectangular"
                  fill
                  priority
                  sizes="(min-width: 768px) 300px, 100vw"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-5 flex-1">
              {/* Description */}
              <div>
                <h3 className="md:text-lg font-bold">
                  2.Cylindrical Projection
                </h3>
                <p className="mt-3">
                  This technique involves mapping images onto a cylindrical
                  surface, usually for smartphone panoramas.
                </p>
              </div>
              {/* Image Sample */}
              <div className="w-full h-[84px] md:h-[145px] relative rounded-lg">
                <Image
                  src="/assets/Panorama.jpg"
                  alt="Panorama"
                  fill
                  priority
                  sizes="(min-width: 768px) 300px, 100vw"
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </SectionLayout>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.2} onClick={() => scroll(2)}>
        <SectionLayout>
          {/* Content */}
          <div className="flex flex-col md:flex-row md:space-x-5 md:space-y-0 space-y-5 w-full">
            <div className="flex flex-col w-full gap-3 md:gap-5 flex-1">
              {/* Description */}
              <div>
                <h3 className="md:text-lg font-bold">
                  3. Little Planet Effect
                </h3>
                <p className="mt-3">
                  This style renders panoramic images with a{" "}
                  <b>&quot;Little Planet&quot;</b> or{" "}
                  <b>&quot;Tiny Planet&quot;</b> appearance, adding a whimsical
                  twist to panoramic photography.
                </p>
              </div>
              {/* Image Sample */}
              <div className="md:w-[400px] md:h-[400px] w-full h-auto aspect-square relative rounded-lg">
                <Image
                  src="/assets/LittlePlanet.jpg"
                  alt="LittlePlanet"
                  fill
                  priority
                  sizes="(min-width: 768px) 300px, 100vw"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="flex-1 hidden md:flex items-center pt-20">
              <div className="w-[200px] h-[200px] rounded-full relative">
                <Image
                  src="/assets/small-meme.gif"
                  alt="small meme"
                  fill
                  priority
                  sizes="(min-width: 768px) 300px, 100vw"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </SectionLayout>
      </ParallaxLayer>
    </>
  );
}

export default SectionHLS;
