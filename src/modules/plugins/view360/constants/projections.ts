import { EquirectProjection } from "@egjs/react-view360";

const beachProjection = new EquirectProjection({
  src: "/assets/sample-beach.jpg",
});

const auroraProjection = new EquirectProjection({
  src: "/assets/sample-aurora.jpg",
});

const dockProjection = new EquirectProjection({
  src: "/assets/sample-dock.jpg",
});

const lakeProjection = new EquirectProjection({
  src: "/assets/sample-lake.jpg",
});

const roomProjection = new EquirectProjection({
  src: "/assets/sample-room.jpg",
});

export const projections = [
  {
    id: 1,
    name: "Beach",
    image: beachProjection,
  },
  {
    id: 2,
    name: "Aurora",
    image: auroraProjection,
  },
  {
    id: 3,
    name: "Dock",
    image: dockProjection,
  },
  {
    id: 4,
    name: "Lake",
    image: lakeProjection,
  },
  {
    id: 5,
    name: "Room",
    image: roomProjection,
  },
];
