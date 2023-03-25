import { styled } from "@/styles";
import { keyframes } from "@stitches/react";
import ReactYouTube from "react-youtube"

const changeImage = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: .15
  }
});

const changeText = keyframes({
  from: {
    transform: "translate(0px, 20px)"
  },
  to: {
    transform: "translate(0px, 0px)"
  }
})

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  width: "100vw",
});

export const FristSession = styled('div', {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "5rem",

  height: "717px",
  width: "100vw",
  backgroundColor: "#000",
})

export const SecondSession = styled('div', {
  display: "flex",
  flexDirection: 'column',
  alignItems: "center",
  justifyContent: "center",
  height: '391px',
  width: "100vw",
  paddingTop: "20rem",

  "h1, p, button": {
    animation: `${changeText} 1s`
  },

  strong: {
    color: '$blue-100'
  },

  img: {
    position: "absolute",
    zIndex: -1,
    opacity: .15,
    animation: `${changeImage} 1s`,
  },
  button: {
    marginBottom: "10rem"
  }
});

export const Button = styled("button", {
  padding: "0.6rem 2rem",
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "$white-100",

  border: "none",
  borderRadius: "6px",
  backgroundColor: "$red-pink",

  marginTop: '1.25rem',

  transition: "background-color 150ms",

  "&:hover": {
    backgroundColor: "$red"
  }
});