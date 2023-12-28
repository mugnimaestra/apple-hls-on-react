import React from "react";
import LibShakaPlayer from "shaka-player-react";
import "shaka-player-react/dist/controls.css";

type ShakaPlayerProps = {
  src: string;
};

export default function ShakaPlayer({ src }: ShakaPlayerProps) {
  return <LibShakaPlayer autoPlay src={src} />;
}
