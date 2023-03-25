import { styled, keyframes } from "@/styles";

const showMainWhenOpenPage = keyframes({
  from: {
    opacity: .3,
    transform: "translate(-10px, 0px)"
  },
  to: {
    opacity: 1,
    transform: "translate(0px, 0px)"
  }
});

const showDescriptionFieldWhenOpenPage = keyframes({
  from: {
    opacity: .3
  },
  to: {
    opacity: 1
  }
})

export const ProductContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh"
});

export const ContentFiled = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  backgroundColor: "$gray-300",

  borderRadius: "8px",
  width: "70%",
  minHeight: "99vh",
  marginTop: "2rem",

  paddingBottom: "10rem"

});

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  width: "100vw",

  zIndex: 1,
  backgroundColor: "$black",
  padding: "1.25rem 0",
  position: "fixed",
  
  a: {
    fontSize: "1.25rem",
    fontWeight: "bold",
  }
})

export const Main = styled("main", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  width: "98%",
  marginTop: "2rem",

  backgroundColor: "$gray-200",

  padding: "6rem 0",

  borderRadius: "6px",

  animation: `${showMainWhenOpenPage} .8s`,

  transition: "box-shadow 150ms, scale 150ms",

  "&:hover": {
    boxShadow: "1px 2px 5px rgba(200, 200, 200, .3)",
    scale: 1.001
  }
  
})

export const ImagesField = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "auto",
});

export const PurchaseFiled = styled("div", {
  display: "flex",
  flex: .5,
  flexDirection: "column",
  justifyContent: "space-between",

  height: "auto",

  position: "relative",

  h1: {
    marginBottom: ".5rem"    
  },

  h3: {
    fontSize: "1.45rem",
  },

  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    marginTop: "4rem",
    border: "3px solid $white-100",

    width: "max-content",
    padding: ".5rem",
    borderRadius: "6px",

    fontSize: "1rem",

    input: {
      border: "none",
      width: "4rem",
      fontSize: "1.15rem",
      textAlign: "center",
      
      marginLeft: ".5rem",

      backgroundColor: "$white-300",
      color: "black",

      outline: "none",
      borderRadius: "2px",

      "-webkit-appearance": "none",
      "-moz-appearance": "textfield",
    }
  }
})

export const ScrollImage = styled("div", {
  display: "flex",
  marginTop: ".1rem",
  maxWidth: "500px",
  overflow: "scroll",
})

export const PurchaseButton = styled("button", {
  // position: "absolute",

  backgroundColor: "$red-pink",
  border: "none",
  width: "300px",
  height: "50px",
  borderRadius: "6px",
  fontSize: "1.5rem",
  fontWeight: "bold",

  transition: "box-shadow 150ms, background-color 150ms",
  color: "white",

  "&:hover": {
    backgroundColor: "$hover-button",
    boxShadow: "1px 2px 5px rgba(0, 0, 0, .3)"
  }
});


export  const DescriptionField = styled("div", {
  marginTop: "10rem",
  marginBottom: "10rem",
  padding: "0 2rem",

  h1: {
    marginBottom: ".5rem"
  },

  p: {
    fontSize: "1.2rem"
  },

  animation: `${showDescriptionFieldWhenOpenPage} 1s`
});

export const Footer = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "4rem"
})