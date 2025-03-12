import { useRef } from "react";
import styled from "styled-components";
import { px } from "../../utils/themeUtils";

const PhoneDisplay = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.white};
  overflow: hidden;
  display: flex;
  z-index: 1;
  position: absolute;
  top: ${px(17)};
  left: ${px(10)};
  height: ${px(83)};
  width: ${px(68)};
`;

const DisplayWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.white};
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  overflow: hidden;
  display: flex;
  position: relative;
`;

const DisplayContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const DisplayTextWrapper = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
`;

const DisplayText = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Monocraft", Courier, monospace;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.default};
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  line-height: 1.2;
  white-space: pre-wrap;
  text-align: start;
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
    background-color: ${({ theme }) => theme.colors.accent.blue};
    animation: blink 1.5s step-end infinite;
    @keyframes blink {
      50% {
        background-color: transparent;
      }
    }
  }
`;

const Textarea = styled.textarea<{ $isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  font-family: "Monocraft", Courier, monospace;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.default};
  outline: none;
  resize: none;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  line-height: 1.2;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
`;

interface DisplayProps {
  text: string;
  cursorPosition: number;
  isEditing: boolean;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: () => void;
  onClick: () => void;
}

export default function Display({
  text,
  cursorPosition,
  isEditing,
  onTextChange,
  onBlur,
  onClick,
}: DisplayProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <PhoneDisplay>
      <DisplayWrapper
        role="textbox"
        aria-label="Feedback display"
        onClick={onClick}
      >
        <DisplayContent>
          <Textarea
            ref={textareaRef}
            value={text}
            onChange={onTextChange}
            onBlur={onBlur}
            spellCheck={false}
            $isVisible={isEditing}
            autoFocus
          />
          <DisplayTextWrapper $isVisible={!isEditing}>
            <DisplayText>
              {text.slice(0, cursorPosition)}
              <Cursor />
              {text.slice(cursorPosition)}
            </DisplayText>
          </DisplayTextWrapper>
        </DisplayContent>
      </DisplayWrapper>
    </PhoneDisplay>
  );
}
