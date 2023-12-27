import React from "react";
import LibShakaPlayer from "shaka-player-react";
import "shaka-player-react/dist/controls.css";

function ShakaPlayer() {
  return <LibShakaPlayer autoPlay src="https://streams.com/example.mpd" />;
}
