"use client";

import { Hotspot, ImageHotspot } from "@/types/hotspots";
import Image from "next/image";
import React from "react";
import hotspots from "./constants/hotspots";
import { projections } from "./constants/projections";

type Props = {
  projection: (typeof projections)[0];
  changeProjection: (id: number) => void;
};

function HotspotsList({ projection, changeProjection }: Props): JSX.Element {
  return (
    <div className="view360-hotspots">
      {/* <!-- Hotspots --> */}
      {hotspots[projection.id as unknown as keyof typeof hotspots]?.map(
        (hotspot, idx) => {
          const isImageHotspot = (
            hotspot: Hotspot
          ): hotspot is ImageHotspot => {
            return "type" in hotspot && hotspot.type === "image";
          };

          return (
            <div
              key={idx}
              className="view360-hotspot "
              data-yaw={hotspot.yaw}
              data-pitch={hotspot.pitch}
              onClick={() => {
                if ("type" in hotspot && hotspot.type === "link") {
                  changeProjection(hotspot.id);
                }
              }}
            >
              {isImageHotspot(hotspot) ? (
                <div className="relative w-[300px] h-[300px]">
                  <Image
                    src={hotspot.link}
                    alt="rick rolled"
                    fill
                    sizes="300px"
                    className="object-contain"
                  />
                </div>
              ) : "text" in hotspot ? (
                <p className="bg-white p-3 w-[120px] rounded-full flex justify-center items-center cursor-pointer">
                  {hotspot.text}
                </p>
              ) : (
                ""
              )}
            </div>
          );
        }
      )}
    </div>
  );
}

export default HotspotsList;
