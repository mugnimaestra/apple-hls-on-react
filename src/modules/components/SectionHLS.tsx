"use client";

import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";
import SectionLayout from "./SectionLayout";
import ReactPlayer from "../react-player/ReactPlayer";
import PlyrComponent from "../plyr-react/PlyrComponent";

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
            <p>
              There are 2 common player for playing HLS on the web, which are
            </p>
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
                  support for MSE. HLS.js is compatible with browsers supported
                  by Shaka Player, but with the following limitations:
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
                <h3 className="md:text-lg font-bold">
                  2. Shaka Player (shaka-player-react)
                </h3>
                <p className="mt-3">
                  Shaka Player is an open-source JavaScript library for adaptive
                  media. It plays adaptive media formats (such as DASH and HLS)
                  in a browser, without using plugins or Flash.
                </p>
              </div>
              {/* Image Sample */}
              <div className="w-full h-[200px] relative rounded-lg">
                <Image
                  src="/assets/shaka-player.png"
                  alt="Shaka Player"
                  fill
                  priority
                  sizes="(min-width: 768px) 300px, 100vw"
                  className="object-contain rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-5 flex-1">
              {/* Description */}
              <div>
                <h3 className="md:text-lg font-bold">3. Plyr (plyr-react)</h3>
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
          <div className="flex flex-col md:flex-row md:space-x-5 md:space-y-0 space-y-5 w-full">
            <div className="flex flex-col w-full gap-3 md:gap-5 flex-1">
              {/* Description */}
              <div>
                <h3 className="md:text-lg font-bold">
                  1. HLS.js (included in react-player)
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
                    Widely supported on most browsers{" "}
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
                <div className="flex-[4]">
                  <ReactPlayer url="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" />
                  <p className="text-sm text-center font-medium">
                    Source:{" "}
                    <a
                      href="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
                      target="_blank"
                      className="hover:underline"
                    >
                      https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8
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
      <ParallaxLayer offset={1} speed={0.2}>
        <SectionLayout>
          {/* Content */}
          <div className="flex flex-col md:flex-row md:space-x-5 md:space-y-0 space-y-5 w-full">
            <div className="flex flex-col w-full gap-3 md:gap-5 flex-1">
              {/* Description */}
              <div>
                <h3 className="md:text-lg font-bold">3. Plyr (plyr-react)</h3>
                <p className="mt-3">
                  Below are example video using plyr-react when playing HLS, it
                  is
                </p>
                <ol className="list-decimal list">
                  <li className="ml-6 text-md font-medium">
                    using hls.js under the hood, same withc react-player
                  </li>
                  <li>their basic UI have a quality selector</li>
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
                <div className="flex-[4]">
                  <PlyrComponent src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" />
                  <p className="text-sm text-center font-medium">
                    Source:{" "}
                    <a
                      href="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
                      target="_blank"
                      className="hover:underline"
                    >
                      https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8
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
