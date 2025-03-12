import { ReactNode } from "react";
import { useTextInput } from "../hooks/useTextInput";
import { PhoneContext } from "./PhoneContext";

const PhoneProvider = ({ children }: { children: ReactNode }) => {
  const phoneInput = useTextInput();
  return (
    <PhoneContext.Provider value={phoneInput}>{children}</PhoneContext.Provider>
  );
};

export default PhoneProvider;
