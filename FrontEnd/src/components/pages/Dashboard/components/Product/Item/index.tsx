import NextImage from "next/image";
import { TrashSimple, Pause, PencilSimple } from "phosphor-react";

import { ProductItemContainer, InformationsField, ToolsField } from "./styles";

interface ProductItemProps {
  id: string;
  title: string;
  main_image: string;
  price: string;
  description: string;
}

export function ProductItem({
  id,
  title,
  main_image,
  price,
  description,
}: ProductItemProps) {
  return (
    <ProductItemContainer>
      <NextImage unoptimized src={main_image} width={290} height={250} alt="" />
      <InformationsField>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>price: {price}</p>
        <p>id: {id}</p>
      </InformationsField>
      <ToolsField>
        <PencilSimple size={22} />
        <Pause size={22} />
        <TrashSimple size={22} />
      </ToolsField>
    </ProductItemContainer>
  );
}
