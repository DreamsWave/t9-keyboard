import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PhoneSVG from "../../assets/textures/phone.svg";
import { useTextInput } from "../../hooks/useTextInput";
import { px } from "../../utils/themeUtils";
import Display from "./Display";
import Keypad from "./Keypad/Keypad";

const PhoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${px(88)};
  height: ${px(258)};
  position: relative;
`;

const PhoneTexture = styled.img`
  width: ${px(88)};
  height: ${px(258)};
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
`;

const PhoneKeypad = styled.div`
  overflow: hidden;
  display: flex;
  z-index: 1;
  position: absolute;
  top: ${px(142)};
  left: ${px(5)};
  height: ${px(100)};
  width: ${px(78)};
`;

export default function PhoneFeedbackForm() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const {
    text,
    setText,
    handleT9Input,
    handleBackspace,
    cursorPosition,
    setCursorPosition,
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

  const handleBlur = useCallback(() => {
    setCursorPosition(text.length); // Assume setCursorPosition is exposed
    setIsEditing(false);
  }, [setCursorPosition, text.length]);

  return (
    <PhoneContainer>
      <Display
        text={text}
        cursorPosition={cursorPosition}
        isEditing={isEditing}
        onTextChange={handleTextChange}
        onBlur={handleBlur}
        onClick={switchToTextarea}
      />
      <PhoneKeypad>
        <Keypad
          onKeyPress={handleT9Input}
          onBackspace={handleBackspace}
          onSubmit={handleFormSubmit}
          onMoveLeft={moveCursorLeft}
          onMoveRight={moveCursorRight}
        />
      </PhoneKeypad>
      <PhoneTexture src={PhoneSVG} alt="Phone texture" />
    </PhoneContainer>
  );
}
