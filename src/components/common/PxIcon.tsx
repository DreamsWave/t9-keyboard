import React from "react";
import styled from "styled-components";
import { px } from "../../utils/themeUtils";

const PxIconContainer = styled.img<{ $pxHeight: number; $pxWidth: number }>`
  height: ${({ $pxHeight }) => px($pxHeight)};
  width: ${({ $pxWidth }) => px($pxWidth)};
`;

interface PxIconProps {
  src: string;
  height: number;
  width: number;
  alt?: string;
}

/**
 * Renders an image with dimensions scaled by the theme's pixelSize.
 * @param props - Component props
 */
const PxIcon = React.memo(({ src, height, width, alt = "" }: PxIconProps) => {
  return (
    <PxIconContainer src={src} $pxHeight={height} $pxWidth={width} alt={alt} />
  );
});

export default PxIcon;
