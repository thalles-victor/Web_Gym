import { ProductListContainer, Nav, ResultFiled } from "./styles";
import { ArrowsClockwise, Plus } from "phosphor-react";
import { useEffect, useState } from "react";

import { AddProductDialog } from "./Dialog";
import { client } from "@/utils/api/apoloclient";
import { gql } from "@apollo/client";
import { ProductItem } from "../Item";

interface ProductType {
  id: string;
  title: string;
  description: string;
  main_image: string;
  price: string;
}

export function ProductList() {
  const [allProducts, setAllProducts] = useState<ProductType[] | null>(null);

  async function fetchAllProducts() {
    const data = await client
      .query({
        query: gql`
          query {
            getAllProducts {
              id
              title
              main_image
              secodary_images
              description
              price
              created_at
            }
          }
        `,
      })
      .then((result) => result.data.getAllProducts)
      .catch((error) => {
        console.log(error);
        return null;
      });

    console.log(data);

    setAllProducts(data);
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <ProductListContainer>
      <Nav>
        <button>Todos</button>
        <button>Encontrar</button>
        <button>Encontrar vários</button>
        <AddProductDialog />
        <ArrowsClockwise size={22} />
      </Nav>
      ç
      <ResultFiled>
        {allProducts &&
          allProducts.map((product, index) => {
            return (
              <ProductItem
                id={product.id}
                title={product.title}
                description={product.description}
                main_image={product.main_image}
                price={product.price}
              />
            );
          })}
      </ResultFiled>
    </ProductListContainer>
  );
}
