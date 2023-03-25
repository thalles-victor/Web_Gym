import { styled } from "@/styles";


export const SignInContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  height: "100vh",
});

export const Main = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  

  padding: "10rem 0rem",
  borderRadius: "6px",
  gap: "1.5rem",

});

export const InputField = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "400px",

  marginBottom: ".65rem",

  input: {
    border: "none",
    borderRadius: "3px",
    fontSize: "1.2rem",
    color: "black",
    padding: ".3rem",
    outline: "none",
    marginTop: ".25rem",
  }
});

export const ActionSubmitField = styled("div" , {
  display: "flex",
  flex: "row",
  justifyContent: "space-between",
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
      signIn: {
        backgroundColor: "$red-pink",
        fontWeight: "bold",


        "&:hover": {
          backgroundColor: "$hover-button",
        }
      },
      createAccount: {
        backgroundColor: "$gray-100",
        
        "&:hover": {
          backgroundColor: "$gray-200"
        }
      }
    },
  }
})
export const Separetor = styled("div", {
  display: "flex",
  width: "350px",
  border: "1px solid white",
  marginTop: "2rem"
});