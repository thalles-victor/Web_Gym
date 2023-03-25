import { styled } from "@/styles";

export const SignUpContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "70vh",

  h1: {
    marginBottom: "2rem"
  }
});

export const FillFiled = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: ".65rem",
  width: "400px",

  input: {
    border: "none",
    borderRadius: "3px",
    padding: ".3rem",
    color: "$black",
    fontSize: "1.2rem"
  },
});

export const SubimitField = styled("div", {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  marginTop: "1.25rem",
});

export const Button = styled("button", {
  padding: ".5rem",
  fontSize: "1rem",
  border: "none",
  borderRadius: "6px",
  color: "$white-100",  
  transition: "background-color 150ms",

  variants: {
    typeOfButton: {
      createAccount: {
        backgroundColor: "$red-pink",
        fontWeight: "bold",


        "&:hover": {
          backgroundColor: "$hover-button",
        }
      },
      signIn: {
        backgroundColor: "$gray-100",
        
        "&:hover": {
          backgroundColor: "$gray-200"
        }
      }
    },
  }
})