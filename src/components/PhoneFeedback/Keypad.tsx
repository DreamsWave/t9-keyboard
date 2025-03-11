import { useCallback } from "react";
import styled from "styled-components";
import {
  KEYPAD_LAYOUT,
  T9Key,
  T9_KEY_LABELS,
  T9_KEY_MAP,
} from "../../constants/t9";

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

type KeyType = "default" | "delete" | "submit" | "nav";

const KeypadContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ActionRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
`;

const NumericGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
`;

const KeyButton = styled.button<{ type: KeyType }>`
  background-color: ${({ type, theme }) =>
    type === "delete"
      ? theme.colors.status.error.default
      : type === "submit"
      ? theme.colors.status.success.default
      : theme.colors.grey};
  color: ${({ theme }) => theme.colors.primary.white};
  border: none;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  user-select: none;
  &:hover {
    background-color: ${({ type, theme }) =>
      type === "delete"
        ? theme.colors.status.error.hover
        : type === "submit"
        ? theme.colors.status.success.hover
        : theme.colors.grey.hover};
  }
`;

const Chars = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  opacity: 0.7;
`;

interface KeyProps {
  type: KeyType;
  label: string;
  chars?: string;
  onClick: () => void;
}

const Key: React.FC<KeyProps> = ({ type, label, chars, onClick }) => (
  <KeyButton
    type={type}
    onClick={onClick}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
    tabIndex={0}
    aria-label={`${label}${chars ? ` (${chars})` : ""}`}
  >
    {label}
    {chars && <Chars>{chars}</Chars>}
  </KeyButton>
);

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
        <Key type="delete" label="←" onClick={handleBackspace} />
        <Key type="nav" label="⬅️" onClick={handleMoveLeft} />
        <Key type="nav" label="➡️" onClick={handleMoveRight} />
        <Key type="submit" label="Send" onClick={handleSubmit} />
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
