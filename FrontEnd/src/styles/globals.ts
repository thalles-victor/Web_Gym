import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
    color: "$white-100",
  },

  button: {
    color: "black",
  },

  strong: {
    fontWeight: 700,
  },

  body: {
    "-webkit-font-smoothing": "antialised",
    backgroundColor: "$background",
  },

  "button, a": {
    "&:hover": {
      cursor: "pointer",
    },
  },
});
