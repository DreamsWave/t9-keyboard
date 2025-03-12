import { useCallback } from "react";
import styled from "styled-components";
import PhoneCallSVG from "../../../assets/icons/phone-call.svg";
import PhoneCallOffSVG from "../../../assets/icons/phone-off.svg";
import SelectSVG from "../../../assets/icons/select.svg";
import {
  KEYPAD_LAYOUT,
  T9Key,
  T9_KEY_LABELS,
  T9_KEY_MAP,
} from "../../../constants/t9";
import { px } from "../../../utils/themeUtils";
import PxIcon from "../../common/PxIcon";
import DPad from "./DPad";
import Key from "./Key";
import KeyControl from "./KeyControl";

interface KeypadProps {
  onKeyPress: (key: T9Key) => void;
  onBackspace: () => void;
  onSubmit: (event: React.FormEvent) => void;
  onMoveLeft: () => void;
  onMoveRight: () => void;
  layout?: T9Key[];
  keyMap?: Record<T9Key, string[]>;
  keyLabels?: Record<T9Key, string>;
}

const KeypadContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${px(2)};
`;

const ActionRow = styled.div`
  display: grid;
  grid-template-columns: 1fr ${px(30)} 1fr;
  margin-top: ${px(2)};
`;

const ActionColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: ${px(18)};
  gap: ${px(2)};
  margin-left: ${px(2)};
`;

const NumericGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
`;

export default function Keypad({
  onKeyPress,
  onBackspace,
  onSubmit,
  onMoveLeft,
  onMoveRight,
  layout = KEYPAD_LAYOUT,
  keyMap = T9_KEY_MAP,
  keyLabels = T9_KEY_LABELS,
}: KeypadProps) {
  const handleKeyPress = useCallback(
    (key: T9Key) => () => onKeyPress(key),
    [onKeyPress]
  );
  const handleBackspace = useCallback(() => onBackspace(), [onBackspace]);
  const handleSubmit = useCallback(
    () => onSubmit({ preventDefault: () => {} } as React.FormEvent),
    [onSubmit]
  );
  const handleMoveLeft = useCallback(() => onMoveLeft(), [onMoveLeft]);
  const handleMoveRight = useCallback(() => onMoveRight(), [onMoveRight]);

  return (
    <KeypadContainer>
      <ActionRow>
        <ActionColumn>
          <KeyControl onClick={handleBackspace} noPadding>
            <PxIcon src={SelectSVG} pxHeight={1} pxWidth={5} />
          </KeyControl>
          <KeyControl onClick={handleBackspace} noPadding>
            <PxIcon src={PhoneCallOffSVG} pxHeight={7} pxWidth={12} />
          </KeyControl>
        </ActionColumn>
        <DPad
          handleMoveUp={handleMoveLeft}
          handleMoveRight={handleMoveRight}
          handleMoveDown={handleMoveRight}
          handleMoveLeft={handleMoveLeft}
        />
        <ActionColumn>
          <KeyControl onClick={handleSubmit} noPadding>
            <PxIcon src={SelectSVG} pxHeight={1} pxWidth={5} />
          </KeyControl>
          <KeyControl onClick={handleSubmit} noPadding>
            <PxIcon src={PhoneCallSVG} pxHeight={7} pxWidth={12} />
          </KeyControl>
        </ActionColumn>
      </ActionRow>
      <NumericGrid>
        {layout.map((key) => (
          <Key
            key={key}
            type="default"
            label={keyLabels[key]}
            chars={keyMap[key].join("")}
            onClick={handleKeyPress(key)}
          />
        ))}
      </NumericGrid>
    </KeypadContainer>
  );
}
