export const colorMap = {
  yellow: { bg: "var(--yellow)", light: "var(--warm)", accent: "var(--yellow)" },
  pink: { bg: "var(--pink)", light: "var(--tint-pink)", accent: "var(--pink)" },
  blue: { bg: "var(--blue-light)", light: "var(--tint-blue)", accent: "var(--blue-light)" },
  green: { bg: "var(--mint)", light: "var(--tint-green)", accent: "var(--mint)" },
  purple: { bg: "var(--purple)", light: "var(--tint-purple)", accent: "var(--purple)" },
};

export type ColorKey = keyof typeof colorMap;
