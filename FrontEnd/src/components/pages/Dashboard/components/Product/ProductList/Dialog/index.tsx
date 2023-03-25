import NextImage from "next/image";
import { useEffect, useState } from "react"
import { Plus } from "phosphor-react";
import { useMutation } from "@apollo/client";
import { Controller } from "react-hook-form"
import { RefInput } from "./input"

import * as StyledDialog from "./styles";
import {
  FieldSet,
  Input,
  TextArea,
  MainEmptyImage,
  FooterForm,
  ImageField,
  SecondaryImages,
  SubmitButtonFiled,
  SubmitButton,
  AddNewSecondaryImage
} from "./styles";
import { useForm } from "react-hook-form"

import { imageToBase64 } from "@/utils/imageToBase64";
import { REGISTER_PRODUCT_MUTATION } from "@/utils/api/Mutations";
import { FIELD_RESOLVER_MIDDLEWARE_METADATA, registerEnumType } from "@nestjs/graphql";


type CreateProductFormProps = {
  title: string;
  mainImage: FileList | null;
  newSecondaryImage: FileList[] | null
  description: string;
  price: number | string;
  amount: number;
  maxIstalments: number;
}

type CreateProductImagesProps = {

}

export function AddProductDialog() {
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [secondaryImages, setSecondaryImages] = useState<string[]>([]);

  const { handleSubmit, register, watch, control, reset, setValue }= useForm<CreateProductFormProps>({});
  const [RegisterProduct, { data: product_created }] = useMutation(REGISTER_PRODUCT_MUTATION);

  function handleCreateNewProduct(product: CreateProductFormProps) {
    RegisterProduct({ 
      variables: {
        title: product.title,
        price: parseInt(product.price as string),
        main_image: mainImage,

        secondary_images: secondaryImages,
        description: product.description,
      }
    });  
  }


  watch((data) => {
    const { mainImage } = data;
    const { newSecondaryImage } = data;

    if (mainImage) {
      if (mainImage.length > 0) {
        const getFile = mainImage[0]
        imageToBase64(getFile).then(
          imageInBase64 => setMainImage(imageInBase64 as string)
        )
        reset({
          mainImage: null,
        })
      }
    }

    if (newSecondaryImage) {
      if (newSecondaryImage.length > 0) {
        const getFile = newSecondaryImage[0];
        imageToBase64(getFile).then(
          imageInBase64 => {
            setSecondaryImages(
              [...secondaryImages, imageInBase64 as string]
              )
            reset({
              newSecondaryImage: null
            })
          }
        )
      }
    }
  });

  return(
    <StyledDialog.Root>
    <StyledDialog.Trigger>Novo</StyledDialog.Trigger>
    <StyledDialog.Portal>
      <StyledDialog.OverLay />
      <StyledDialog.Content>
        <StyledDialog.Title>Criar um novo produto</StyledDialog.Title>
        <StyledDialog.Description>
          Esse dialog cria um novo produto
        </StyledDialog.Description>
        <form onSubmit={handleSubmit(handleCreateNewProduct)}>
        <ImageField>
          {
            mainImage? (  <NextImage
                            src={mainImage}
                            width={150}
                            height={0}
                            alt=""
                          />
                        )
                        :
                        ( 
                          <MainEmptyImage htmlFor="mainImage">
                            <input
                              {...register("mainImage")}
                              id="mainImage"
                              type={"file"} />
                          </MainEmptyImage> 
                        )
          }
          <SecondaryImages>
            {
              secondaryImages.map((image, index) => {
                return (
                  <NextImage
                    key={index}
                    src={image}
                    width={150}
                    height={0}
                    alt=""
                  />
                )
              })
            }

            <div>
              <AddNewSecondaryImage htmlFor="addSecondaryImage">
                <Plus/>
                <input
                  {...register("newSecondaryImage")}
                  id="addSecondaryImage"
                  type={"file"}
                />
              </AddNewSecondaryImage>
            </div>
          </SecondaryImages>
        </ImageField>

        <FieldSet>
          <label>título</label>
          <Input
            {...register("title")}
            type="text"

          />
        </FieldSet>
        <FieldSet>
          <label>descrição</label>
          <TextArea
            {...register("description")}
            cols={23}
            rows={10} />
        </FieldSet>

        <FooterForm>
          <FieldSet>
            <label>preço</label>
            <Input
              {...register("price")}
              typeOfInput={"numeric"}
              inputMode="numeric"/>
          </FieldSet>
          <FieldSet>
            <label>quantidade</label>
            <Input
              {...register("amount")}
              typeOfInput={"numeric"}
              inputMode="numeric"/>
          </FieldSet>
          <FieldSet>
            <label>limite de parcelas</label>
            <Input
              {...register("maxIstalments")}
              typeOfInput={"numeric"}
              inputMode={"numeric"}
            />
          </FieldSet>
        </FooterForm>
        <SubmitButtonFiled>
          <StyledDialog.Close asChild>
            <SubmitButton
              typeOfButton={"cancel"}
            >cancelar</SubmitButton>
          </StyledDialog.Close>
          <SubmitButton
            typeOfButton={"confirm"}
            type={"submit"}
            onClick={() => {
              // handleRegisterProduct()
            }}
          >
            Criar
          </SubmitButton>
        </SubmitButtonFiled>
        </form>
      </StyledDialog.Content>
    </StyledDialog.Portal>
  </StyledDialog.Root>
  )
}