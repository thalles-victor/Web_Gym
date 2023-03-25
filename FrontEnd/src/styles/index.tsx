import { createStitches } from "@stitches/react";

export const {
  styled,
  keyframes,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  prefix,
  reset,
  theme
} = createStitches({
  theme: {
    colors: {
      "white-100": "#F2F2F2",
      "white-300": "#D9D9D9",

      "gray-100": "#595959",
      "gray-200": "#242323",
      "gray-300": "#171717",
      
      "background": "#0D0D0D",

      "red-pink": "#D9042B",
      "hover-button": "#DB0109",

      "blue-600": "#054BA6",
      "blue-100": "#0367A6",
      "red": "#D90404",
      "black": "#0D0D0D"

    }
  }
})