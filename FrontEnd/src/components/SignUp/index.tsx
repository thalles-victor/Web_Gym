import { useRouter } from "next/router";
import { FillFiled, SignUpContainer, SubimitField, Button } from "./styles";
import { useForm } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { client } from "@/utils/api/apoloclient";
import { gql } from "@apollo/client";
import { SIGN_UP_MUTATION } from "@/utils/api/Mutations";

const signInSchema = zod.object({
  name: zod.string().min(1).max(100),
  email: zod.string().min(1).max(100).email(),
  password: zod.string().min(6).max(50),
});

type SignUpProps = zod.infer<typeof signInSchema>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>({
    resolver: zodResolver(signInSchema),
  });

  async function signUp(data: SignUpProps) {
    const credentials = await client
      .mutate({
        mutation: SIGN_UP_MUTATION,
        variables: {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      })
      .then((result) => result.data.registerUser)
      .catch((errors) => {
        console.log(errors);
        return null;
      });

    console.log(credentials);
  }

  const router = useRouter();
  return (
    <SignUpContainer>
      <h1>Criar conta</h1>
      <form onSubmit={handleSubmit(signUp)}>
        <FillFiled>
          <label htmlFor="name">nome copleto</label>
          <input id="name" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </FillFiled>
        <FillFiled>
          <label htmlFor="email">email</label>
          <input id="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </FillFiled>
        <FillFiled>
          <label htmlFor="password">senha</label>
          <input id="password" type={"password"} {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </FillFiled>
        <SubimitField>
          <Button
            onClick={() => {
              router.push("/auth/entrar");
            }}
            typeOfButton={"signIn"}
          >
            Já tenho uma conta
          </Button>
          <Button type="submit" typeOfButton={"createAccount"}>
            Cadastrar
          </Button>
        </SubimitField>
      </form>
    </SignUpContainer>
  );
}
