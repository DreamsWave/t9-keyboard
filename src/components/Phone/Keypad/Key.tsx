import styled from "styled-components";
import { KeyType } from "../../../types/keypad";
import KeypadButton from "./KeypadButton";

const Chars = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  opacity: 0.7;
`;

interface KeyProps {
  type: KeyType;
  label: string;
  chars?: string;
  onClick: () => void;
  noPadding?: boolean;
}

function Key({ label, onClick, chars, noPadding = false }: KeyProps) {
  return (
    <KeypadButton
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      tabIndex={0}
      aria-label={`${label}${chars ? ` (${chars})` : ""}`}
      noPadding={noPadding}
    >
      {label}
      {chars && <Chars>{chars}</Chars>}
    </KeypadButton>
  );
}

export default Key;
