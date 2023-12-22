"use client";

import View360, { ControlBar, LoadingSpinner } from "@egjs/react-view360";
import { useEffect, useRef, useState } from "react";
import { projections } from "./constants/projections";
import HotspotsList from "./HotspotsList";
import ImageListbox from "./ImageListbox";

export default function View360Component() {
  const [ready, setReady] = useState(false);
  const viewerRef = useRef<View360>(null);
  const [projection, setProjection] = useState(projections[0]);

  const changeProjection = (id: number) => {
    setProjection(projections[id - 1]);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      setReady(true);
    }
  }, []);

  return !ready ? (
    <div>Loading</div>
  ) : (
    <div className="flex flex-col w-full justify-between gap-5">
      <div className="w-full">
        <View360
          ref={viewerRef}
          key={projection.id || 1}
          className="is-16by9"
          projection={projection.image}
          plugins={[new ControlBar(), new LoadingSpinner()]}
        >
          <HotspotsList
            changeProjection={changeProjection}
            projection={projection}
          />
        </View360>
      </div>
    </div>
  );
}
