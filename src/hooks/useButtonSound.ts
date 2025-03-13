import { useCallback } from "react";
import PhoneButtonPress1Sound from "../assets/sounds/phone/phone-button-press-1.wav";
import PhoneButtonPress2Sound from "../assets/sounds/phone/phone-button-press-2.wav";
import PhoneButtonUnpressPress1Sound from "../assets/sounds/phone/phone-button-unpress-1.wav";
import PhoneButtonUnpressPress2Sound from "../assets/sounds/phone/phone-button-unpress-2.wav";

const AudioVolume = 0.2;

type PhoneClickSound = {
  press: string;
  unpress: string;
};

const PhoneClickSounds: PhoneClickSound[] = [
  { press: PhoneButtonPress1Sound, unpress: PhoneButtonUnpressPress1Sound },
  { press: PhoneButtonPress2Sound, unpress: PhoneButtonUnpressPress2Sound },
];

const getRandomPhoneClickSound = () => {
  const randomIndex = Math.floor(Math.random() * PhoneClickSounds.length);
  return PhoneClickSounds[randomIndex];
};

export const useButtonSound = () => {
  const playSound = useCallback((isPress: boolean) => {
    const sound = getRandomPhoneClickSound();
    const audio = new Audio(isPress ? sound.press : sound.unpress);
    audio.volume = AudioVolume;
    audio.play();
  }, []);

  return { playSound };
};
