import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useTextInput } from "../../hooks/useTextInput";
import Keypad from "./Keypad";

const PhoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
`;

const PhoneBody = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.dark};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.border.radius.lg};
  width: ${({ theme }) => theme.layout.phone.width};
  height: ${({ theme }) => theme.layout.phone.height};
  box-shadow: ${({ theme }) => theme.elevation.shadow.lg};
  display: flex;
  flex-direction: column;
`;

const Display = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.white};
  flex: 1;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  border: ${({ theme }) => theme.border.style.inset};
  padding: ${({ theme }) => theme.spacing.md};
  overflow: hidden;
  display: flex;
`;

const DisplayText = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Courier New", Courier, monospace;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary.black};
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  line-height: 1.2;
  white-space: pre-wrap;
  text-align: left;
  overflow-wrap: break-word;
  position: relative;
  user-select: none;
`;

const Cursor = styled.span`
  width: 0;
  height: 1.2em;
  position: relative;
  display: inline-block;
  vertical-align: bottom;

  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    top: 0;
    right: -2px;
    background-color: ${({ theme }) => theme.colors.accent.cyan};
    animation: blink 1.5s step-end infinite;
    @keyframes blink {
      50% {
        background-color: transparent;
      }
    }
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  font-family: "Courier New", Courier, monospace;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary.black};
  outline: none;
  resize: none;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  line-height: 1.2;
`;

const Placeholder = styled.span`
  color: ${({ theme }) => theme.colors.grey.default};
  font-family: "Courier New", Courier, monospace;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

export default function PhoneFeedbackForm() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const {
    text,
    setText,
    handleT9Input,
    handleBackspace,
    cursorPosition,
    moveCursorLeft,
    moveCursorRight,
  } = useTextInput();
  const [isEditing, setIsEditing] = useState(false);

  const handleFormSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      console.log("Feedback submitted:", text);
      setText("");
      setIsEditing(false);
    },
    [text, setText]
  );

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  const switchToTextarea = useCallback(() => setIsEditing(true), []);

  const handleTextChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
    },
    [setText]
  );

  const renderDisplay = () => {
    if (isEditing) {
      return (
        <Textarea
          ref={textareaRef}
          value={text}
          onChange={handleTextChange}
          onBlur={() => setIsEditing(false)}
          placeholder="Enter feedback..."
          autoFocus
        />
      );
    }
    if (text.length === 0) return <Placeholder>Enter feedback...</Placeholder>;
    return (
      <DisplayText>
        {text.slice(0, cursorPosition)}
        <Cursor />
        {text.slice(cursorPosition)}
      </DisplayText>
    );
  };

  return (
    <PhoneContainer>
      <PhoneBody>
        <Display
          role="textbox"
          aria-label="Feedback display"
          onClick={switchToTextarea}
        >
          {renderDisplay()}
        </Display>
        <Keypad
          onKeyPress={handleT9Input}
          onBackspace={handleBackspace}
          onSubmit={handleFormSubmit}
          onMoveLeft={moveCursorLeft}
          onMoveRight={moveCursorRight}
        />
      </PhoneBody>
    </PhoneContainer>
  );
}
