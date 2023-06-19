import React from "react";
import { ImageProps } from "./Img.types";

const Image: React.FC<ImageProps> = ({ src, alt, backgroundColor, disabled }) => {
  return (
    <img src={src} alt={alt} style={{ backgroundColor, opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "pointer" }} />
  );
};

export default Image;
