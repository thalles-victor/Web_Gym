import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { GoogleLogo } from "phosphor-react";
import { initFirebase } from "../../../lib/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {
  SignInContainer,
  Main,
  InputField,
  ActionSubmitField,
  Separetor,
  Button,
} from "./styles";

const signInSchemaForm = zod.object({
  email: zod.string().min(1, { message: "O campo email não pode ser vazio" }),
  password: zod
    .string()
    .min(1, { message: "O campo de senha não pode ser vazio" }),
});

type SignInFormType = zod.infer<typeof signInSchemaForm>;

export function SignIn() {
  // initFirebase();
  const router = useRouter();
  // const provider = new GoogleAuthProvider();
  // const auth = getAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInSchemaForm),
  });

  function handleSignIn(data: SignInFormType) {
    console.log(data);
  }

  async function signWithGoogle() {
    // const result = await signInWithPopup(auth, provider);
    // console.log(result);
  }

  return (
    <SignInContainer>
      <Main>
        <h1>Entrar</h1>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <InputField>
            <label>Email</label>
            <input {...register("email")} type="text" />
            {errors.email && errors.email.message}
          </InputField>

          <InputField>
            <label>Senha</label>
            <input {...register("password")} type="password" />
            {errors.password && errors.password.message}
          </InputField>

          <ActionSubmitField>
            <Button
              typeOfButton={"createAccount"}
              onClick={() => {
                router.push("/auth/criar-conta");
              }}
            >
              Criar conta
            </Button>
            <Button typeOfButton={"signIn"} type="submit">
              Entrar
            </Button>
          </ActionSubmitField>
        </form>
        <Separetor />

        <center>
          <h3>Ou entrar com</h3>
          <GoogleLogo onClick={signWithGoogle} size={64} />
        </center>
      </Main>
    </SignInContainer>
  );
}
