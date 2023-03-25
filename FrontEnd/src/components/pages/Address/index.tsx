import { useContext } from "react";
import { useRouter } from "next/router"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";

import { AddressContainer, Main, InputField, FormLeftSide, FormRightSide } from "./styles"

import { AddressType } from "@/contexts/AddressType"
import { PurchaseContext } from "@/contexts/PurchaseProvider";

const addressZodSchema = zod.object({
  country: zod.string().min(1, { message:  "O país não pode estar em branco"}),
  city: zod.string().min(1, { message:  "A cidade não pode estar em branco"}),
  state: zod.string().min(1, { message: "O estado não pode ser vazio" }),
  postal_code: zod.string().length(8, {message: "O cep tem que ter 8 números"}),
  street: zod.string().min(1, { message: "A rua não pode ser vazia" }),
  district: zod.string().min(1, { message: "O Bairro não pode ser vizio" })

})

type AddressZodSchemaType = zod.infer<typeof addressZodSchema>

export function Address() {
  const { address, SetAddress } = useContext(PurchaseContext);

  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<AddressZodSchemaType>({
    resolver: zodResolver(addressZodSchema)
  });

  function handleSetAddress(data: AddressType) {
    console.log(data)
    SetAddress(data);

    router.push("/compra/pagamento/tipo-de-pagamento")
  }

  return(
    <AddressContainer>
      <Main>
        <h1>Endereço</h1>
        <form onSubmit={handleSubmit(handleSetAddress)}>
          <FormLeftSide>
            <InputField sizeOfInput={"small"}>
              <label htmlFor="country-input">País</label>
              <input
                {...register("country")}
                id="country-input"
                type={"text"}
                defaultValue={"Brazil"}
              />
              {errors.country && <p>{errors.country.message}</p> }
            </InputField>

            <InputField sizeOfInput={"small"}>
              <label htmlFor="postalCode-input">cep</label>
              <input
                {...register("postal_code")}
                id="postalCode-input"
                type={"number"}
              />
              {errors.postal_code && <p>{errors.postal_code.message}</p>}
              
            </InputField>

            <InputField>
              <label htmlFor="city-input">Cidade</label>
              <input
                {...register("city")}
                id="city-input"
                type={"text"}
              />
              {errors.city && <p>{errors.city.message}</p>}
            </InputField>
            
            <InputField>
              <label htmlFor="state-input">Estado</label>
              <input
                {...register("state")}
                id="state-input"
                type={"text"}
              />
              {errors.state && <p>{errors.state.message}</p>}
            </InputField>

            <InputField>
              <label htmlFor="street-input">Rua</label>
              <input
                {...register("street")}
                id="street-input"
                type={"text"}
              />
              {errors.street && <p>{errors.street.message}</p>}
            </InputField>

            <InputField>
              <label htmlFor="district-input">Bairro</label>
              <input
                {...register("district")}
                id="district-input"
                type={"text"}
              />
              {errors.district && <p>{errors.district.message}</p>}
            </InputField>
          </FormLeftSide>

          <FormRightSide>
            <button type="submit">Confirmar</button>
          </FormRightSide>
        </form>

      </Main>
    </AddressContainer>
  )
}