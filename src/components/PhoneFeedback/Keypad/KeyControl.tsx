import styled from "styled-components";
import KeypadControlButton from "./KeypadControlButton";

const Chars = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  opacity: 0.7;
`;

interface KeyControlProps {
  chars?: string;
  onClick: () => void;
  noPadding?: boolean;
  children: React.ReactNode;
}

function KeyControl({
  children,
  onClick,
  chars,
  noPadding = false,
}: KeyControlProps) {
  return (
    <KeypadControlButton
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      tabIndex={0}
      noPadding={noPadding}
    >
      {children}
      {chars && <Chars>{chars}</Chars>}
    </KeypadControlButton>
  );
}

export default KeyControl;
