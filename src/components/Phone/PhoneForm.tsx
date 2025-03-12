import { useCallback, useEffect, useRef, useState } from "react";
import { usePhoneInput } from "../../context/PhoneContext";
import Display from "./Display/Display";
import Keypad from "./Keypad/Keypad";
import { PhoneKeypad } from "./Phone.styles";

export default function PhoneForm() {
  const {
    text,
    setText,
    handleT9Input,
    handleBackspace,
    cursorPosition,
    setCursorPosition,
    moveCursorLeft,
    moveCursorRight,
  } = usePhoneInput();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleFormSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      console.log("Text sent:", text);
      setText("");
      setIsEditing(false);
    },
    [text, setText]
  );

  const handleSubmitClick = useCallback(
    () => handleFormSubmit({ preventDefault: () => {} } as React.FormEvent),
    [handleFormSubmit]
  );

  useEffect(() => {
    if (isEditing && textareaRef.current) textareaRef.current.focus();
  }, [isEditing]);

  return (
    <>
      <Display
        text={text}
        cursorPosition={cursorPosition}
        isEditing={isEditing}
        leftActionLabel="Backspace"
        rightActionLabel="Send"
        onTextChange={(e) => setText(e.target.value)}
        onBlur={() => {
          setCursorPosition(text.length);
          setIsEditing(false);
        }}
        onClick={() => setIsEditing(true)}
        onLeftAction={handleBackspace}
        onRightAction={handleSubmitClick}
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
    </>
  );
}
