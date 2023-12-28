declare global {
  interface Window {
    Hls: any;
  }
}

interface Level {
  bitrate: number;
  height: number;
  width: number;
  name: string;
}

import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player/lazy";

interface HLSCustomReactPlayerProps {
  src: string;
}

const HLSCustomReactPlayer: React.FC<HLSCustomReactPlayerProps> = ({ src }) => {
  const [showControls, setShowControls] = useState(false);
  const [levels, setLevels] = useState<Level[]>([]);
  const [currentLevel, setCurrentLevel] = useState<Level>();
  const playerRef = useRef<ReactPlayer>(null);

  const handleMouseEnter = () => setShowControls(true);
  const handleMouseLeave = () => setShowControls(false);

  const handleQualityChange = (levelIndex: string) => {
    const level = levels[Number(levelIndex)];
    if (playerRef && playerRef.current && level) {
      const hls = playerRef.current.getInternalPlayer("hls");
      if (hls) {
        hls.currentLevel = level;
        setCurrentLevel(level);
      }
    }
  };

  return (
    <div
      className="aspect-video relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ReactPlayer
        ref={playerRef}
        className="react-player"
        url={src}
        width="100%"
        height="100%"
        onReady={() => {
          console.log("onReady");
          if (playerRef && playerRef.current) {
            const hls = playerRef.current.getInternalPlayer("hls");
            setLevels(hls.levels);
            setCurrentLevel(hls.currentLevel);
          }
        }}
      />
      {showControls && (
      <div className="absolute bottom-0 w-full">
        <select
          value={currentLevel ? levels.indexOf(currentLevel) : -1}
          onChange={(e) => handleQualityChange(e.target.value)}
        >
          {levels.map((level, index) => (
            <option key={index} value={index}>
              {level.height}p
            </option>
          ))}
        </select>
      </div>
      )} 
    </div>
  );
};

export default HLSCustomReactPlayer;
