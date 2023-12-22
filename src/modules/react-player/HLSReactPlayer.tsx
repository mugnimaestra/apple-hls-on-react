"use client";

import React, { useEffect } from "react";
import { Config } from "react-player";
import LibReactPlayer, {
  ReactPlayerProps as LibReactPlayerProps,
} from "react-player/lazy";

interface ReactPlayerProps extends LibReactPlayerProps {
  url: string;
  className?: string;
}

const HLSReactPlayer: React.FC<ReactPlayerProps> = ({
  url,
  className,
  ...rest
}) => {
  const [isClient, setIsClient] = React.useState(false);
  const config: Config = {
    file: {
      attributes: {
        controlslist: "nodownload", // Disable download button
      },
    },
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div
      data-testid="ReactPlayer"
      className="player-wrapper aspect-h-9 aspect-w-16 relative h-full w-full"
    >
      <LibReactPlayer
        className="absolute left-0 top-0"
        width="100%"
        height="100%"
        url={url}
        controls
        config={config}
        {...rest}
      />
    </div>
  );
};

export default HLSReactPlayer;
