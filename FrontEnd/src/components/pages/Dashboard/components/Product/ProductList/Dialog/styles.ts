import { styled } from "@/styles"
import * as Dialog from "@radix-ui/react-dialog"


export const Root = styled(Dialog.Root, {})

export const Trigger = styled(Dialog.Trigger, {})

export const Portal = styled(Dialog.Portal)

export const OverLay = styled(Dialog.Overlay, {
  backgroundColor: "rgba(0, 0, 0, .25)",
  position: "fixed",
  inset: 0,
})

export const Content = styled(Dialog.Content, {
  backgroundColor: "$gray-200",
  borderRadius: "6px",
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "900px",
  maxHeight: "85vh",
  padding: 25,
  overflowY: "scroll"
})

export const Title = styled(Dialog.Title, {})

export const Description = styled(Dialog.Description, {
  marginBottom: "2rem"
})

export const Close = styled(Dialog.Close, {});

export const FieldSet = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: ".9rem",

  label: {
    fontSize: "1.25rem",
    marginBottom: ".2rem"
  },
});

export const Input = styled("input", {
  width: "95%",
  borderRadius: "3px",
  border: "none",
  fontSize: "1.25rem",
  color: "$black",
  paddingLeft: ".5rem",
  paddingTop: ".2rem",
  paddingBottom: ".2rem",

  variants: {
    typeOfInput: {
      text: {

      },
      numeric: {
        width: "70px"
      }
    }
  }
});

export const TextArea = styled("textarea", {
  width: "95%",
  borderRadius: "3px",
  border: "none",
  fontSize: "1.25rem",
  color: "$black",
  paddingLeft: ".5rem",
  paddingTop: ".2rem",
});

export const FooterForm = styled("footer", {
  display: "flex",
  gap: "4rem",
  
  input: {
    width: "max-content"
  }
});


export const ImageField =  styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  maxWidth: "95%",
  
  img: {
    width: "400px",
    height: "auto"
    // width: "400px",
    // borderRadius: "3px",
  },
  overflow: "hidden"
});

export const MainEmptyImage = styled("label", {})

export const SecondaryImages = styled("div", {
  display: "flex",
  flexDirection: "row",
  overflowX: "scroll",
  overflowY: "hidden",
  gap: ".5rem",
  paddingBottom: ".5rem",

  img: {
    width: "150px"
  },
  
  svg: {
    width: "100px",
    height: "100%",

    "&:hover": {
      cursor: "pointer"
    }
  }
});

export const SubmitButtonFiled = styled("div", {
  display: "flex",
  width: "100%",
  justifyContent: "space-between"
});

export const SubmitButton = styled("button", {
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "$white",
  // padding: ".25rem .5rem",
  paddingTop: ".5rem",
  paddingBottom: ".5rem",
  width: "100px",
  border: "none",
  borderRadius: "6px",

  transition: "background-color 150ms",

  variants: {
    typeOfButton: {
      confirm: {
        backgroundColor: "$red-pink",

        "&:hover": {
          backgroundColor: "$red"
        }
      },
      cancel: {
        fontWeight: "normal",
        backgroundColor: "$gray-100",

        "&:hover": {
          backgroundColor: "$gray-300"
        }
      },
    }
  }
});

export const AddNewSecondaryImage = styled("label", {})