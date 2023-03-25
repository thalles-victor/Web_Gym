import { styled } from "@/styles";

export const DashboardContainer = styled("div", {
  display: "flex",
  paddingTop: "3rem",
  gap: "0 3rem",
  maxHeight: "100vh",
  width: "100vw",
  
  aside: {
    marginLeft: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    button: {
      fontSize: "1.25rem",
      border: "none",
      borderRadius: "6px",
      padding: ".5rem 2rem",
    }
  }
});

export const Main = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  backgroundColor: "$gray-200",
  width: "80%",
  height: "800px",
  justifySelf: "center",
  borderRadius: "6px",
  padding: "2rem 2rem 2rem 2rem",
});

export const CategoryField = styled('div', {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1.25rem",
})
