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
import ReactPlayer from "react-player";

interface HLSCustomReactPlayerProps {
  src: string;
}

const HLSCustomReactPlayer: React.FC<HLSCustomReactPlayerProps> = ({ src }) => {
  const [showControls, setShowControls] = useState(false);
  const [levels, setLevels] = useState<Level[]>([]);
  const [currentLevel, setCurrentLevel] = useState<Level>();
  const playerRef = useRef<ReactPlayer>(null);

  console.log('currentLevel', currentLevel)
  console.log('levels', levels)

  const handleMouseEnter = () => setShowControls(true);
  const handleMouseLeave = () => setShowControls(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (playerRef && playerRef.current) {
        const hls = playerRef.current.getInternalPlayer("hls");
        if (hls) {
          hls.on(window.Hls.Events.MANIFEST_PARSED, function () {
            console.log('callback event manifest_parsed');
            setLevels(hls.levels);
            setCurrentLevel(hls.currentLevel);
          });
          clearInterval(intervalId); // Clear the interval if hls is available
        }
      }
    }, 500); // Check every 500ms
  }, []);

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
        playing
        config={{
          file: {
            hlsOptions: { autoStartLoad: true },
            hlsVersion: "0.14.17",
          },
        }}
      />
      {/* {showControls && ( */}
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
      {/* )} */}
    </div>
  );
};

export default HLSCustomReactPlayer;
