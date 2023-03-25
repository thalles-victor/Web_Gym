import NextImage from "next/image";
import { useRouter } from "next/router";
import { CheckCircle, ShieldCheck, Truck } from "phosphor-react";

import {
  ContentFiled,
  Header,
  Main,
  ImagesField,
  PurchaseFiled,
  DescriptionField,
  ScrollImage,
  ProductContainer,
  PurchaseButton,
  Footer,
} from "./styles";
import { SealOfApproval } from "./components/SealOfApproval";

import WheyImage from "../../../assests/whey1.webp";
import { wheyDescription } from "temp";
import { useContext } from "react";
import { PurchaseContext } from "@/contexts/PurchaseProvider";

interface ProductProps {
  product: {
    id: string;
    title: string;
    price: string;
    description: string;
    main_image: string;
    secodary_images: string[];
  };
}

export function Product({
  product: { id, title, description, price, main_image, secodary_images },
}: ProductProps) {
  const { amount, SetAmount } = useContext(PurchaseContext);
  const router = useRouter();
  console.log("main image is: ", main_image);
  return (
    <ProductContainer>
      <ContentFiled>
        <Main>
          <ImagesField>
            <NextImage src={main_image} width={500} height={450} alt="" />
            <ScrollImage>
              <NextImage src={main_image} width={120} height={100} alt="" />
              {secodary_images.map((image, index) => {
                return (
                  <NextImage src={image} width={120} height={100} alt="" />
                );
              })}
            </ScrollImage>
          </ImagesField>
          <PurchaseFiled>
            <div>
              <h1>{title}</h1>
              <h3>R$ {price}</h3>
              <form>
                <label htmlFor="amount">Quantidade</label>
                <input
                  id="amount"
                  type="number"
                  defaultValue={1}
                  onChange={(e) => {
                    const amountInt = parseInt(e.target.value);
                    SetAmount(amountInt);
                  }}
                />
              </form>
            </div>

            <PurchaseButton onClick={() => router.push("/compra/endereco")}>
              Comprar
            </PurchaseButton>
          </PurchaseFiled>
        </Main>
        <DescriptionField>
          <h1>Descrição do produto</h1>
          <p>{description}</p>
        </DescriptionField>

        <Footer>
          <SealOfApproval
            title="100% whey"
            description="verificação de qualidade"
            icon={<CheckCircle size={64} color="#39E65B" />}
          />
          <SealOfApproval
            title="Compra 100% segura"
            description="Temos uma política de devolução flexivel"
            icon={<ShieldCheck size={64} color="#3488FF" />}
          />
          <SealOfApproval
            title="Rápida entrega"
            description="Entregamos em até 30dias"
            icon={<Truck size={64} color="#FCE24C" />}
          />
        </Footer>
      </ContentFiled>
    </ProductContainer>
  );
}
