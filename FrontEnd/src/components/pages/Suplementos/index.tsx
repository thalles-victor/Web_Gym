import { ProductCard } from "./cards";

import {
  SuplementosContainer,
  SupplementsCardsList,
  NoProdutMessageField,
} from "./styles";

interface AllProductsQueryProps {
  products: {
    id: string;
    title: string;
    price: number;
    main_image: string;
    description: string;
  }[];
}

export function Suplementos({ products }: AllProductsQueryProps) {
  console.log("Products is...: ", products);

  return (
    <SuplementosContainer>
      <SupplementsCardsList>
        {products.length > 0 ? (
          products.map((product, index) => {
            return (
              <ProductCard
                price={product.price}
                id={product.id}
                title={product.title}
                main_image={product.main_image}
              />
            );
          })
        ) : (
          <NoProdutMessageField>
            <h1>Não há produtos disponível na loja</h1>
            <p>
              Você pode acessar o nosso bloger enquanto publicamos mais produtos
            </p>
          </NoProdutMessageField>
        )}
        {/* {
          allProducts && allProducts.map((product, index) => {
            return(
              <ProductCard
                title={product.title}
                main_image={product.main_image}
              />
            )
          })
        } */}
      </SupplementsCardsList>
    </SuplementosContainer>
  );
}
