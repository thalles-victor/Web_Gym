import NextLink from "next/link"
import { styled } from "@/styles";

export const HeaderContainer = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  width: "100vw",

  zIndex: 9999,
  backgroundColor: "$black",
  padding: "1.25rem 0",
  position: "fixed",

  borderBottom: "1px solid $red",
  boxShadow: "2px 2px 5px rgba(150, 0, 0, .9)",

  variants: {
    ableToShow: {
      true: {
        display: "none"
      },
      false: {
        display: "flex"
      }
    }
  }
});

export const Link = styled(NextLink, {
  fontSize: "1.25rem",
  fontWeight: "bold",

  transition: "color 150ms",
  "&:hover": {
    color: "#770AF8"
  },

  variants: {
    pathsOfLinks: {
      current: {
        color: "#770AF8"
      },
      default: {
        color: "$white"
      }
    }
  }
})