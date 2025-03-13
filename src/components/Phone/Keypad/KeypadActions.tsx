import { useCallback } from "react";
import PhoneCallSVG from "../../../assets/icons/phone-call.svg";
import PhoneCallOffSVG from "../../../assets/icons/phone-off.svg";
import SelectSVG from "../../../assets/icons/select.svg";
import PxIcon from "../../common/PxIcon";
import Key from "./Key/Key";
import { ActionColumn } from "./Keypad.styles";

const ACTIONS_CONFIG = {
  left: [
    {
      icon: SelectSVG,
      action: "onBackspace",
      label: "Backspace",
      height: 1,
      width: 5,
    },
    {
      icon: PhoneCallOffSVG,
      action: "onBackspace",
      label: "Cancel call",
      height: 7,
      width: 12,
    },
  ],
  right: [
    {
      icon: SelectSVG,
      action: "onSubmit",
      label: "Submit",
      height: 1,
      width: 5,
    },
    {
      icon: PhoneCallSVG,
      action: "onSubmit",
      label: "Make call",
      height: 7,
      width: 12,
    },
  ],
} as const;

interface KeypadActionsProps {
  onBackspace?: () => void;
  onSubmit?: (event: React.FormEvent) => void;
  side: "left" | "right";
}

export default function KeypadActions({
  onBackspace = () => {},
  onSubmit = () => {},
  side,
}: KeypadActionsProps) {
  const handleSubmit = useCallback(
    () => onSubmit({ preventDefault: () => {} } as React.FormEvent),
    [onSubmit]
  );
  const handlers = { onBackspace, onSubmit: handleSubmit };

  return (
    <ActionColumn $side={side}>
      {ACTIONS_CONFIG[side].map(({ icon, action, label, height, width }) => (
        <Key
          key={label}
          type="control"
          onClick={handlers[action]}
          noPadding
          aria-label={label}
        >
          <PxIcon
            src={icon}
            height={height}
            width={width}
            alt={`${label} icon`}
          />
        </Key>
      ))}
    </ActionColumn>
  );
}
