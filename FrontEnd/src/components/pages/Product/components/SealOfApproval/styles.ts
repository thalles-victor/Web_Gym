import { styled } from "@/styles";

export const SealOfApprovalContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",

  width: "250px",
  height: "260px",

  backgroundColor: "$gray-200",
  borderRadius: "6px",

  p: {
    textAlign: "center"
  },

  transition: "scale 150ms",

  "&:hover": {
    cursor: "zoom-in",
    scale: 1.1
  }
})