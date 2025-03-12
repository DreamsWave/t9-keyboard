import styled from "styled-components";
import { px } from "../../utils/themeUtils";

export const PhoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${px(88)};
  height: ${px(258)};
  position: relative;
`;

export const PhoneTexture = styled.img`
  width: ${px(88)};
  height: ${px(258)};
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
`;

export const PhoneKeypad = styled.div`
  overflow: hidden;
  display: flex;
  z-index: 1;
  position: absolute;
  top: ${px(142)};
  left: ${px(5)};
  height: ${px(100)};
  width: ${px(78)};
`;
