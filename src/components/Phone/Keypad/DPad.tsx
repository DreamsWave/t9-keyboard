import styled from "styled-components";
import PhoneDPad from "../../../assets/textures/phone-dpad.svg";
import { px } from "../../../utils/themeUtils";

const DPadContainer = styled.div`
  height: ${px(30)};
  width: ${px(30)};
  position: relative;
  margin-top: ${px(1)};
`;

const DPadTexture = styled.img`
  height: ${px(30)};
  width: ${px(30)};
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const KeysContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const DPadButton = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  position: absolute;
  width: ${px(10)};
  height: ${px(10)};
`;

const DPadButtonUp = styled(DPadButton)`
  top: 0;
  left: ${px(10)};
`;

const DPadButtonRight = styled(DPadButton)`
  top: ${px(10)};
  right: 0;
`;

const DPadButtonBottom = styled(DPadButton)`
  bottom: 0;
  left: ${px(10)};
`;

const DPadButtonLeft = styled(DPadButton)`
  top: ${px(10)};
  left: 0;
`;

interface DPadProps {
  handleMoveUp: () => void;
  handleMoveRight: () => void;
  handleMoveDown: () => void;
  handleMoveLeft: () => void;
}

function DPad({
  handleMoveUp,
  handleMoveRight,
  handleMoveDown,
  handleMoveLeft,
}: DPadProps) {
  return (
    <DPadContainer>
      <KeysContainer>
        <DPadButtonUp onClick={handleMoveUp} />
        <DPadButtonRight onClick={handleMoveRight} />
        <DPadButtonBottom onClick={handleMoveDown} />
        <DPadButtonLeft onClick={handleMoveLeft} />
      </KeysContainer>
      <DPadTexture src={PhoneDPad} alt="Phone dpad texture" />
    </DPadContainer>
  );
}

export default DPad;
