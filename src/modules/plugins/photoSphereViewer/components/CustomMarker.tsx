import React from "react";

interface CustomMarkerProps {
  content: string;
}

export const CustomMarker: React.FC<CustomMarkerProps> = ({ content }) => (
  <div>
    <p className="bg-white p-3 w-[120px] rounded-full flex justify-center items-center cursor-pointer">
      {content}
    </p>
  </div>
);
