import PhoneSVG from "../../assets/textures/phone.svg";
import PhoneProvider from "../../context/PhoneProvider";
import { PhoneContainer, PhoneTexture } from "./Phone.styles";
import PhoneForm from "./PhoneForm";

export default function Phone() {
  return (
    <PhoneContainer>
      <PhoneProvider>
        <PhoneForm />
      </PhoneProvider>
      <PhoneTexture src={PhoneSVG} alt="Phone texture" />
    </PhoneContainer>
  );
}
