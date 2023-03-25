import { keyframes, styled } from "@/styles";

const showProductListContainer = keyframes({
  from: {
    opacity: .7,
  },
  to: {
    opacity: 1
  }
})

export const ProductListContainer = styled("div", {
  animation: `${showProductListContainer} 1s`,
  width: "100%"
})

export const Nav = styled("nav", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.25rem",

  padding: ".5rem",
  

  button: {
    fontSize: "1rem",
    padding: ".25rem .5rem",
    border: "none",
    borderRadius: "2px",
  },
});



export const ResultFiled = styled("div", {
  display: "flex",
  marginTop: "2rem",
  flexDirection: "column",
  overflowY: "scroll",
  width: "95%",
  height: "650px",

  backgroundColor: "$black",
  padding: "2rem",
  borderRadius: "6px",

  boxShadow: "1px 1px 5px rgba(0, 0, 0, .7)",

  gap: "2rem"
}); 

