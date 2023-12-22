"use client";

import React, { useEffect, useMemo, useState } from "react";
import SectionLayout from "./SectionLayout";
import { ParallaxLayer } from "@react-spring/parallax";
import View360, {
  ControlBar,
  CylindricalProjection,
  EquirectProjection,
  LittlePlanetProjection,
  LoadingSpinner,
} from "@egjs/react-view360";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import View360Component from "../plugins/view360/View360Component";
import PhotoSphereViewerComponent from "../plugins/photoSphereViewer/PhotoSphereViewerComponent";

type Props = {
  scroll: (to: number) => void;
};

function SectionViewer({ scroll }: Props) {
  const [ready, setReady] = useState(false);
  const EquirectangularProjection = useMemo(
    () =>
      new EquirectProjection({
        src: "/assets/Equirectangular.jpg",
      }),
    []
  );

  const PanoramaProjection = useMemo(
    () =>
      new CylindricalProjection({
        src: "/assets/Panorama.jpg",
      }),
    []
  );

  const LPlanetProjection = useMemo(
    () =>
      new LittlePlanetProjection({
        src: "/assets/LittlePlanet.jpg",
      }),
    []
  );

  useEffect(() => {
    if (typeof document !== "undefined") {
      setReady(true);
    }
  }, []);
  return (
    <>
      <ParallaxLayer offset={6} speed={0.1} onClick={() => scroll(7)}>
        <SectionLayout>
          <div className="flex w-full flex-col text-2xl space-y-3 md:space-y-5 md:text-4xl font-bold items-center relative">
            <p>The Viewer</p>
            <p>🥳🥳🥳</p>
            <p>🙏🙏</p>
          </div>
        </SectionLayout>
      </ParallaxLayer>
      <ParallaxLayer offset={7} speed={0.1}>
        <SectionLayout>
          <div className="flex w-full flex-col items-start">
            <p className="text-2xl font-bold mb-5">Equirectangular</p>
            <div className="flex w-full flex-row space-x-5">
              <div className="flex flex-col w-full space-y-3">
                <View360
                  className="is-16by9"
                  projection={EquirectangularProjection}
                  plugins={[new ControlBar(), new LoadingSpinner()]}
                />
                <p className="text-center w-full font-medium">
                  Using View360 by Naver
                </p>
              </div>
              <div className="flex flex-col w-full space-y-3">
                <ReactPhotoSphereViewer
                  src={"/assets/Equirectangular.jpg"}
                  height={"100%"}
                  width={"100%"}
                  containerClass="w-full"
                />
                <p className="text-center w-full font-medium">
                  Using Photo Sphere Viewer
                </p>
              </div>
            </div>
            <div
              onClick={() => scroll(8)}
              className="w-full h-20 absolute bottom-0 right-0 left-0"
            />
          </div>
        </SectionLayout>
      </ParallaxLayer>
      <ParallaxLayer offset={8} speed={0.1}>
        <SectionLayout>
          <div className="flex w-full flex-col items-start">
            <p className="text-2xl font-bold mb-5">Cylindrical (Panorama)</p>
            <div className="flex w-full flex-row space-x-5">
              <div className="flex flex-col w-full space-y-3">
                <View360
                  className="is-16by9"
                  projection={PanoramaProjection}
                  plugins={[new ControlBar(), new LoadingSpinner()]}
                />
                <p className="text-center w-full font-medium">
                  Using View360 by Naver
                </p>
              </div>
              <div className="flex flex-col w-full space-y-3">
                <ReactPhotoSphereViewer
                  src={"/assets/Panorama.jpg"}
                  height={"100%"}
                  width={"100%"}
                  containerClass="w-full"
                />
                <p className="text-center w-full font-medium">
                  Using Photo Sphere Viewer
                </p>
              </div>
            </div>
            <div
              onClick={() => scroll(9)}
              className="w-full h-20 absolute bottom-0 right-0 left-0"
            />
          </div>
        </SectionLayout>
      </ParallaxLayer>
      <ParallaxLayer offset={9} speed={0.1}>
        <SectionLayout>
          <div className="flex w-full flex-col items-start">
            <p className="text-2xl font-bold mb-5">Little Planet 🤏</p>
            <div className="flex w-full flex-row space-x-5">
              <div className="flex flex-col w-full space-y-3 relative">
                <View360
                  className="is-16by9"
                  projection={LPlanetProjection}
                  plugins={[new ControlBar(), new LoadingSpinner()]}
                />
                <p className="text-center w-full font-medium absolute -bottom-12">
                  Using View360 by Naver
                </p>
              </div>
              <div className="flex flex-col w-full space-y-3 relative">
                <ReactPhotoSphereViewer
                  src={"/assets/LittlePlanet.jpg"}
                  height={"100%"}
                  width={"100%"}
                  littlePlanet={true}
                  containerClass="w-full"
                />
                <p className="text-center w-full font-medium absolute -bottom-14">
                  Using Photo Sphere Viewer <br />
                  <i>
                    (Displays an equirectangular panorama with a little planet
                    effect.)
                  </i>
                </p>
              </div>
            </div>
            <div
              onClick={() => scroll(10)}
              className="w-full h-20 absolute bottom-0 right-0 left-0"
            />
          </div>
        </SectionLayout>
      </ParallaxLayer>

      <ParallaxLayer offset={10} speed={0.1}>
        <SectionLayout>
          <div className="flex w-full flex-col items-start">
            <p className="text-2xl font-bold mb-5">
              Possible Implementation Using Hotspot
            </p>
            <div className="flex w-full flex-row space-x-5">
              <div className="flex flex-col w-full space-y-3 ">
                <View360Component />
                <p className="text-center w-full font-medium ">
                  Using{" "}
                  <a
                    href="https://photo-sphere-viewer.js.org/"
                    target="_blank"
                    className="underline font-medium"
                  >
                    View360 by Naver
                  </a>
                </p>
              </div>
              <div className="flex flex-col w-full space-y-3 ">
                <PhotoSphereViewerComponent />
                <p className="text-center w-full font-medium ">
                  Using{" "}
                  <a
                    href="https://naver.github.io/egjs-view360/"
                    target="_blank"
                    className="underline font-medium"
                  >
                    Photo Sphere Viewer
                  </a>
                </p>
              </div>
            </div>
            <div
              onClick={() => scroll(11)}
              className="w-full h-20 absolute bottom-0 right-0 left-0"
            />
          </div>
        </SectionLayout>
      </ParallaxLayer>
    </>
  );
}

export default SectionViewer;
