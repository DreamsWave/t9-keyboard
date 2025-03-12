import { useEffect, useRef } from "react";
import {
  Cursor,
  DisplayContent,
  DisplayControlIndicator,
  DisplayControlIndicators,
  DisplayText,
  DisplayWrapper,
  PhoneDisplay,
  Textarea,
} from "./Display.styles";

interface DisplayProps {
  text: string;
  cursorPosition: number;
  isEditing: boolean;
  leftActionLabel?: string;
  rightActionLabel?: string;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: () => void;
  onClick: () => void;
  onLeftAction: () => void;
  onRightAction: () => void;
}

export default function Display({
  text,
  cursorPosition,
  isEditing,
  leftActionLabel = "Decline",
  rightActionLabel = "Accept",
  onTextChange,
  onBlur,
  onClick,
  onLeftAction,
  onRightAction,
}: DisplayProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) textareaRef.current.focus();
  }, [isEditing]);

  return (
    <PhoneDisplay>
      <DisplayWrapper
        role="textbox"
        aria-label="Text display"
        onClick={onClick}
      >
        <DisplayContent>
          {isEditing ? (
            <Textarea
              ref={textareaRef}
              value={text}
              onChange={onTextChange}
              onBlur={onBlur}
              spellCheck={false}
              $isVisible={true}
              autoFocus
              aria-label="Editable text input"
            />
          ) : (
            <DisplayText aria-label={`Text: ${text}`}>
              {text.slice(0, cursorPosition)}
              <Cursor />
              {text.slice(cursorPosition)}
            </DisplayText>
          )}
        </DisplayContent>
      </DisplayWrapper>
      <DisplayControlIndicators>
        <DisplayControlIndicator
          onClick={onLeftAction}
          aria-label={leftActionLabel}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onLeftAction()}
        >
          {leftActionLabel}
        </DisplayControlIndicator>
        <DisplayControlIndicator
          onClick={onRightAction}
          aria-label={rightActionLabel}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onRightAction()}
        >
          {rightActionLabel}
        </DisplayControlIndicator>
      </DisplayControlIndicators>
    </PhoneDisplay>
  );
}
