import styled from "styled-components";
import { px } from "../../utils/themeUtils";

const PxIconContainer = styled.img<{ $pxHeight: number; $pxWidth: number }>`
  height: ${({ $pxHeight }) => px($pxHeight)};
  width: ${({ $pxWidth }) => px($pxWidth)};
`;

interface PxIconProps {
  src: string;
  pxHeight: number;
  pxWidth: number;
}

function PxIcon({ src, pxHeight, pxWidth }: PxIconProps) {
  return <PxIconContainer src={src} $pxHeight={pxHeight} $pxWidth={pxWidth} />;
}

export default PxIcon;
