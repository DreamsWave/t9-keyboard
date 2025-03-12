import { KeyType } from "../../../../types/keypad";
import { Chars } from "./Key.styles";
import { KeypadButton } from "./KeypadButton";

interface KeyProps {
  type: KeyType;
  chars?: string;
  onClick: () => void;
  noPadding?: boolean;
  children: React.ReactNode;
}

function Key({ type, chars, onClick, noPadding = false, children }: KeyProps) {
  return (
    <KeypadButton
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      tabIndex={0}
      aria-label={chars ? `${children} (${chars})` : String(children)}
      noPadding={noPadding}
      isControl={type === "control"}
    >
      {children}
      {chars && <Chars>{chars}</Chars>}
    </KeypadButton>
  );
}

export default Key;
