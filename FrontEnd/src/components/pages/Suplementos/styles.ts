import { styled } from "@/styles";

export const SuplementosContainer = styled("div", {
  position: "absolute",
  display: "flex",
  width: "100vw",
});


export const SupplementsCardsList = styled("div", {
  display: "grid",
  
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "4rem 2rem",
  justifyItems: "center",

  marginTop: "5rem",
  marginBottom: "4rem",

  width: "100%"
});

export const NoProdutMessageField = styled("center", {
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "50vh",
  alignItems: "center",
  justifyContent: "center"
})