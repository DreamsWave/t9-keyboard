import styled from "styled-components";
import { px } from "../../utils/themeUtils";

const NinePatchBase = styled.div<{ $texture: string; $patchMargin?: number }>`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  border-style: solid;
  border-color: #000;
  border-image: url("${({ $texture }) => $texture}");
  border-image-slice: ${({ $patchMargin }) => $patchMargin} fill;
  border-width: ${({ $patchMargin = 0 }) => px($patchMargin)};
`;

type NinePatchProps = {
  texture: string;
  patchMargin: number;
  children: React.ReactNode;
};
function NinePatch({ texture, patchMargin, children }: NinePatchProps) {
  return (
    <NinePatchBase $texture={texture} $patchMargin={patchMargin}>
      {children}
    </NinePatchBase>
  );
}

export default NinePatch;
