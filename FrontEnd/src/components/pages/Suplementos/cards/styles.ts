import { styled, keyframes } from "@/styles";

const showCards = keyframes({
  from: {
    opacity: 0,
    transform: "translate(0px, 10px)"
  },
  to: {
    opacity: 1
  }
})

export const ProductCardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  alignItems: "center",
  
  borderRadius: "4px",
  
  border: "1px solid $red-pink",

  
  backgroundColor: "$black",

  width: "320px",
  height: "390px",

  transition: "scale 150ms",
  animation: `${showCards} 1s`,

  boxShadow: "1px 2px 5px rgba(300, 0, 0, .35)",
  
  h1: {
    marginBottom: "12px",
    marginTop: "6px",
    fontSize: "1.5rem",    
  },

  img: {
    marginBottom: "8px",
  },


  button: {
    width: "100%",
    backgroundColor: "$red-pink",
    
    color: "$white-300",
    fontWeight: "bold",
    border: "none",

    height: "50px",

    fontSize: "1.5rem",
    marginTop: "auto",
  },

  "&:hover": {
    scale: 1.01,
    cursor: "pointer",
  }
});

export const AvaliationField = styled("div", {
  display: "flex",
  gap: ".5rem",
  marginTop: ".5rem"
})

export const SmallDescriptionField = styled("div", {
  display: "flex",
  flexDirection: "column",

  p: {
    fontSize: "1rem",
  },
});