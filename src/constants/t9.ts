export type T9Key =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "0"
  | "*"
  | "#";
export type T9KeyMap = Record<T9Key, string[]>;

export const T9_KEY_MAP: T9KeyMap = {
  "1": [".", ",", "!"],
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
  "0": [" "],
  "*": ["*"],
  "#": ["#"],
} as const;

export const T9_KEY_LABELS: Record<T9Key, string> = {
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "0": "0 ⌴",
  "*": "*",
  "#": "#",
} as const;

export const KEYPAD_LAYOUT: T9Key[] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "*",
  "0",
  "#",
];

export const INPUT_TIMEOUT_MS = 1000;
