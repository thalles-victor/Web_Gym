import { styled, keyframes } from "@/styles";

const showMainWhenOpenPage = keyframes({
  from: {
    opacity: .3
  },
  to: {
    opacity: 1
  }
})

export const AddressContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh"
});

export const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "$gray-300",
  width: "80%",
  height: "80vh",

  borderRadius: "6px",

  animation: `${showMainWhenOpenPage} 1s`,

  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: "2rem",
    marginLeft: "10rem",
    marginRight: "10rem",
    gap: "1.25rem",
  }
});

export const InputField = styled("div", {
  display: "flex",
  flexDirection: "column",  

  label: {
    fontSize: "1.5rem",
    marginBottom: ".25rem"
  },

  input: {
    color: "black",

    paddingLeft: ".5rem",
    paddingTop: ".5rem",
    paddingBottom: ".5rem",

    width: "550px",

    fontSize: "1.15rem",
    
    "-webkit-appearance": "none",
    "-moz-appearance": "textfield",

    border: "none",
    outline: "none",
    borderRadius: "3px",

  },

  variants: {
    sizeOfInput: {
      small: {
        input: {
          width: "130px"
        }
      },
      mediun: {
        input: {
          width: "200px"
        }
      },
      normal: {
        input: {
          width: "350px"
        }
      }
    }
  }
});

export const FormLeftSide = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
})

export const FormRightSide = styled("div", {
  display: "flex",

  button: {
    marginTop: "auto",
    alignSelf:"flex-end",
    justifySelf: "flex-end",

    width: "300px",
    height: "50px",

    fontSize: "1.25rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",

    backgroundColor: "$red-pink",
    color: "White",

    transition: "box-shadow 150ms, background-color 150ms",

    "&:hover": {
      backgroundColor: "$hover-button",
      boxShadow: "1px 2px 5px rgba(0, 0, 0, .3)"
    }
  },
})