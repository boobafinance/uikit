import { Colors } from "./types";

export const baseColors = {
  failure: "#ac3030",
  primary: "#B28E59",
  primaryBright: "#B28E59",
  primaryDark: "#B28E59",
  secondary: "#644f30",
  success: "#2dbd28",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F2ECE3",
  backgroundDisabled: "#E9EAEB",
  contrast: "#0b2b27",
  invertedContrast: "#FFFFFF",
  input: "#EDE6D8",
  tertiary: "#EDE6D8",
  text: "#B28E59",
  textDisabled: "#838383",
  textSubtle: "#B28E59",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#c20205",
  background: "#343135",
  backgroundDisabled: "#28a392",
  contrast: "#FFFFFF",
  invertedContrast: "#0d4039",
  input: "#0098A1",
  primaryDark: "#0098A1",
  tertiary: "#28a392",
  text: "#FFFFFF",
  textDisabled: "#cccccc",
  textSubtle: "#c9c4d4",
  borderColor: "#28a392",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #c20205 0%, #8c0104 100%)",
  },
};