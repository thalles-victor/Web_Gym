import NextImage from "next/image";
import { useRouter } from "next/router";
import { Star } from "phosphor-react";

import {
  ProductCardContainer,
  AvaliationField,
  SmallDescriptionField,
} from "./styles";

import Whey from "../../../../assests/whey1.webp";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  main_image: string;
}

export function ProductCard({
  id,
  title,
  main_image,
  price,
}: ProductCardProps) {
  const router = useRouter();

  return (
    <ProductCardContainer
      onClick={() => {
        router.push(`/suplemento/${id}`);
      }}
    >
      <h1>{title}</h1>
      <NextImage src={main_image} width={250} height={250} alt="" />
      <SmallDescriptionField>
        <AvaliationField>
          <h1>R$ {price},00</h1>
          {/* <p> +100 vendidos</p> */}
          <div>
            {/* <Star color={"yellow"} weight={"fill"} size={18} />
            <Star color={"yellow"} weight={"fill"} size={18} />
            <Star color={"yellow"} weight={"fill"} size={18} />
            <Star color={"yellow"} weight={"fill"} size={18} />
            <Star size={18} /> */}
          </div>
        </AvaliationField>
      </SmallDescriptionField>
      <button>Comprar</button>
    </ProductCardContainer>
  );
}
