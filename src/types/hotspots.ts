export type LinkHotspot = {
  id: number;
  type: "link";
  yaw: number;
  pitch: number;
  text: string;
};

export type ImageHotspot = {
  type: "image";
  yaw: number;
  pitch: number;
  link: string;
};

export type TextHotspot = {
  id: number;
  yaw: number;
  pitch: number;
  text: string;
};

export type Hotspot = LinkHotspot | ImageHotspot | TextHotspot;
