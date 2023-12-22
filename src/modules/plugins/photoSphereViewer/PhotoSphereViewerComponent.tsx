"use client";

import React from "react";
import {
  GalleryPlugin,
  MarkersPlugin,
  ReactPhotoSphereViewer,
  VirtualTourPlugin,
} from "react-photo-sphere-viewer";
import { Viewer, PluginConstructor } from "@photo-sphere-viewer/core";
import { nodes } from "./constants/nodes";

function PhotoSphereViewerComponent() {
  const handleReady = (instance: Viewer) => {
    const virtualTour = instance.getPlugin(
      VirtualTourPlugin
    ) as VirtualTourPlugin;
    if (!virtualTour) return;

    virtualTour.setNodes(nodes, "1");
  };

  const plugins = [
    MarkersPlugin,
    [
      GalleryPlugin,
      {
        thumbnailSize: { width: 100, height: 100 },
        visibleOnLoad: true,
      },
    ],
    [
      VirtualTourPlugin,
      {
        positionMode: "manual",
        renderMode: "markers",
      },
    ],
  ] as PluginConstructor[];

  return (
    <div className="flex flex-col w-full gap-5">
      <div className="w-full">
        <ReactPhotoSphereViewer
          src={"/assets/sample-beach.jpg"}
          height={"100%"}
          width={"100%"}
          onReady={handleReady}
          plugins={plugins}
          containerClass="w-full !aspect-video !rounded-lg"
        />
      </div>
    </div>
  );
}

export default PhotoSphereViewerComponent;
