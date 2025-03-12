import styled from "styled-components";
import { px } from "../../../utils/themeUtils";

export const KeypadContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${px(2)};
`;

export const ActionRow = styled.div`
  display: grid;
  grid-template-columns: 1fr ${px(30)} 1fr;
  margin-top: ${px(2)};
`;

export const ActionColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: ${px(18)};
  gap: ${px(2)};
  margin-left: ${px(2)};
`;

export const NumericGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
`;
