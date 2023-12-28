"use client";

import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";
import SectionLayout from "./SectionLayout";
import ReactPlayer from "../react-player/ReactPlayer";
// import PlyrComponent from "../plyr-react/PlyrComponent";
// import ShakaPlayer from "../shaka-player-react/ShakaPlayer";
import dynamic from "next/dynamic";
import HLSCustomReactPlayer from "../react-player/HLSCustomReactPlayer";

const PlyrComponent = dynamic(() => import("../plyr-react/PlyrComponent"), {
  ssr: false,
});

const ShakaPlayer = dynamic(() => import("../shaka-player-react/ShakaPlayer"), {
  ssr: false,
});

type Props = {
  scroll: (to: number) => void;
};

function SectionHLS({ scroll }: Props) {
  return (
    <>
      <ParallaxLayer offset={0} speed={0.1}>
        <SectionLayout>
          {/* Title */}
          <div className="space-y-3 md:space-y-8 mb-7 md:mb-10">
            <h1 className="text-lg md:text-2xl font-bold md:underline underline-offset-8">
              Common Player for playing HLS Streaming Format
            </h1>
            <p>There are some player for playing HLS on the web, which are</p>
          </div>
          {/* Content */}
          <div className="flex flex-col md:flex-row md:space-x-5 md:space-y-0 space-y-5">
            <div className="flex flex-col gap-3 md:gap-5 flex-1">
              {/* Description */}
              <div>
                <h3 className="md:text-lg font-bold">
                  1. HLS.js (included in react-player)
                </h3>
                <p className="mt-3">
                  HLS.js is a JavaScript library that plays HLS in browsers with
                  support for MSE. HLS.js is compatible with most browsers,
                </p>
              </div>
              {/* Image Sample */}
              <div className="w-full h-[200px] relative rounded-lg">
                <Image
                  src="/assets/hls.png"
                  alt="HLS"
                  fill
                  priority
                  sizes="(min-width: 768px) 300px, 100vw"
                  className="rounded-lg object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-5 flex-1">
              {/* Description */}
              <div>
                <h3 className="md:text-lg font-bold">2. Plyr (plyr-react)</h3>
                <p className="mt-3">
                  Plyr is a simple, lightweight, accessible and customizable
                  HTML5, YouTube and Vimeo media player that supports modern
                  browsers.
                </p>
              </div>
              {/* Image Sample */}
              <div className="w-full h-[200px] relative rounded-lg">
                <Image
                  src="/assets/plyr-react.png"
                  alt="Plyr React"
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

      {/* React Player Section */}
      <ParallaxLayer offset={1} speed={0.2}>
        <SectionLayout>
          {/* Content */}
          <div className="flex flex-col md:flex-row md:space-x-5 md:space-y-0 space-y-5 w-full mt-[200px]">
            <div className="flex flex-col w-full gap-3 md:gap-5 flex-1">
              {/* Description */}
              <div>
                <h3 className="md:text-lg font-bold">
                  1. HLS.js (included in react-player)
                  <a
                    href="https://github.com/cookpete/react-player"
                    target="_blank"
                    className="hover:underline"
                  >
                    [https://github.com/cookpete/react-player]
                  </a>
                  [8.5k stars]
                </h3>
                <p className="mt-3">
                  Below are example video using react-player when playing HLS,
                  it is
                </p>
                <ol className="list-decimal list">
                  <li className="ml-6 text-md font-medium">
                    {`Simple and native player using <video /> element tag`}
                  </li>
                  <li className="ml-6 text-md font-medium">
                    Already used on current website rukita so no need to add
                    more dependencies
                  </li>
                  <li className="ml-6 text-md font-medium">
                    Widely supported on most browsers{" "}
                  </li>
                  <li className="ml-6 text-md font-medium">
                    It can already adjust bitrate/quality based on user
                    connection, but you can&apos;t force it to play on specific
                    quality by default (need extra effort to create custom video
                    player UI)
                  </li>
                </ol>
              </div>

              <div className="flex">
                <div className="flex-1"></div>
                <div className="flex-[4]">
                  <ReactPlayer url="https://mikiya-anime.s3.ap-southeast-1.amazonaws.com/spy-x-family/episode-1/SPYxFAMILY+-+Misi+01+%5BTakarir+Indonesia%5D+%5BR29FeOXqcgA%5D.m3u8" />
                  <p className="text-sm text-center font-medium">
                    Source:{" "}
                    <a
                      href="https://youtu.be/R29FeOXqcgA"
                      target="_blank"
                      className="hover:underline"
                    >
                      https://youtu.be/R29FeOXqcgA
                    </a>
                  </p>
                </div>
                <div className="flex-1"></div>
              </div>

              <div className="md:w-[400px] md:h-[400px] w-full h-auto aspect-square relative rounded-lg"></div>
            </div>
          </div>
        </SectionLayout>
      </ParallaxLayer>

      {/* Plyr React section */}
      <ParallaxLayer offset={2} speed={0.2}>
        <SectionLayout>
          {/* Content */}
          <div className="flex flex-col md:flex-row md:space-x-5 md:space-y-0 space-y-5 w-ful mt-[200px]">
            <div className="flex flex-col w-full gap-3 md:gap-5 flex-1">
              {/* Description */}
              <div>
                <h3 className="md:text-lg font-bold">
                  2. Plyr (plyr-react){" "}
                  <a
                    href="https://github.com/chintan9/plyr-react"
                    target="_blank"
                    className="hover:underline"
                  >
                    [https://github.com/chintan9/plyr-react]
                  </a>
                  [440 stars]
                </h3>
                <p className="mt-3">
                  Below are example video using plyr-react when playing HLS, it
                  is
                </p>
                <ol className="list-decimal list">
                  <li className="ml-6 text-md font-medium">
                    using hls.js under the hood, same with react-player
                  </li>
                  <li className="ml-6 text-md font-medium">
                    their basic UI (from Plyr) have a quality selector
                  </li>
                  <li className="ml-6 text-md font-medium">
                    the Plyr react wrapper actually not supporting hls out of
                    the box, so here&apos;s the custom implementation and there
                    is some buggy issue where you can&apos;t render more than
                    one player on one page on current implementation
                  </li>
                </ol>
              </div>

              <div className="flex">
                <div className="flex-1"></div>
                <div className="flex-[4]">
                  <PlyrComponent src="https://mikiya-anime.s3.ap-southeast-1.amazonaws.com/spy-x-family/episode-1/SPYxFAMILY+-+Misi+01+%5BTakarir+Indonesia%5D+%5BR29FeOXqcgA%5D.m3u8" />
                  <p className="text-sm text-center font-medium">
                    Source:{" "}
                    <a
                      href="https://youtu.be/R29FeOXqcgA"
                      target="_blank"
                      className="hover:underline"
                    >
                      https://youtu.be/R29FeOXqcgA
                    </a>
                  </p>
                </div>
                <div className="flex-1"></div>
              </div>

              <div className="md:w-[400px] md:h-[400px] w-full h-auto aspect-square relative rounded-lg"></div>
            </div>
          </div>
        </SectionLayout>
      </ParallaxLayer>
    </>
  );
}

export default SectionHLS;

/*      
<ParallaxLayer offset={3} speed={0.2}>
<SectionLayout>
  <div className="flex flex-col md:flex-row md:space-x-5 md:space-y-0 space-y-5 w-ful mt-[200px]">
    <div className="flex flex-col w-full gap-3 md:gap-5 flex-1">
      <div>
      <h3 className="md:text-lg font-bold">
          3. HLS.js (included in react-player) with custom UI
          <a
              href="https://github.com/cookpete/react-player"
              target="_blank"
              className="hover:underline"
            >
              [https://github.com/cookpete/react-player]
            </a>
           [8.5k stars]
        </h3>
        <p className="mt-3">
          Below are example video using plyr-react when playing HLS, it
          is
        </p>
        <ol className="list-decimal list">
          <li className="ml-6 text-md font-medium">
            using hls.js under the hood, same with react-player
          </li>
          <li className="ml-6 text-md font-medium">their basic UI (from Plyr) have a quality selector</li>
          <li className="ml-6 text-md font-medium">the Plyr react wrapper actually not supporting hls out of the box, so here&apos;s the custom implementation and there is some buggy issue where you can&apos;t render more than one player on one page on current implementation</li>
        </ol>
      </div>

      <div className="flex">
        <div className="flex-1"></div>
        <div className="flex-[4]">
          <HLSCustomReactPlayer src="https://mikiya-anime.s3.ap-southeast-1.amazonaws.com/spy-x-family/episode-1/SPYxFAMILY+-+Misi+01+%5BTakarir+Indonesia%5D+%5BR29FeOXqcgA%5D.m3u8" />
          <p className="text-sm text-center font-medium">
            Source:{" "}
            <a
              href="https://youtu.be/R29FeOXqcgA"
              target="_blank"
              className="hover:underline"
            >
              https://youtu.be/R29FeOXqcgA
            </a>
          </p>
        </div>
        <div className="flex-1"></div>
      </div>

      <div className="md:w-[400px] md:h-[400px] w-full h-auto aspect-square relative rounded-lg"></div>
    </div>
  </div>
</SectionLayout>
</ParallaxLayer>
*/
