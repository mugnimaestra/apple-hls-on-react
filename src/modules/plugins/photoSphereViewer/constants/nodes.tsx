import { createRoot } from "react-dom/client";
import markers from "./markers";
import { MarkerType } from "../types";
import { VirtualTourNode } from "@photo-sphere-viewer/virtual-tour-plugin";
import { CustomMarker } from "../components/CustomMarker";

const caption = "This is a caption";

function createLink(marker: MarkerType, index: number) {
  if (typeof document !== "undefined") {
    const element = document.createElement("div");
    const root = createRoot(element);
    root.render(
      <CustomMarker content={marker.content} key={index + marker.nodeId} />
    );

    return {
      nodeId: marker.nodeId,
      position: marker.position,
      markerStyle: {
        element,
      },
    };
  }
  return {
    nodeId: marker.nodeId,
    position: marker.position,
  };
}

export const nodes: VirtualTourNode[] = [
  {
    id: "1",
    panorama: "/assets/sample-beach.jpg",
    thumbnail: "/assets/sample-beach.jpg",
    name: "Sample Beach",
    caption: `[1] ${caption}`,
    links: markers[1].map((marker, index) => createLink(marker, index)),
  },
  {
    id: "2",
    panorama: "/assets/sample-aurora.jpg",
    thumbnail: "/assets/sample-aurora.jpg",
    name: "Sample aurora",
    caption: `[2] ${caption}`,
    links: markers[2].map((marker, index) => createLink(marker, index)),
  },
  {
    id: "3",
    panorama: "/assets/sample-dock.jpg",
    thumbnail: "/assets/sample-dock.jpg",
    name: "Sample dock",
    caption: `[3] ${caption}`,
    links: markers[3].map((marker, index) => createLink(marker, index)),
  },
  {
    id: "4",
    panorama: "/assets/sample-lake.jpg",
    thumbnail: "/assets/sample-lake.jpg",
    name: "Sample lake",
    caption: `[4] ${caption}`,
    links: markers[4].map((marker, index) => createLink(marker, index)),
  },
  {
    id: "5",
    panorama: "/assets/sample-room.jpg",
    thumbnail: "/assets/sample-room.jpg",
    name: "Sample room",
    caption: `[5] ${caption}`,
    links: markers[5].map((marker, index) => createLink(marker, index)),
  },
];
