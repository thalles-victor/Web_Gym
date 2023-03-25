import { Product } from "@/components/pages/Product";
import { clientServerSide } from "@/utils/api/apoloclient";
import { GET_ALL_PRODUCTS } from "@/utils/api/Querys";
import { gql, useQuery } from "@apollo/client";
import { all } from "axios";
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPageContext,
} from "next";
import { AppContext } from "next/app";
import { useRouter } from "next/router";

interface ProductResonse {
  id: string;
}

interface Response {
  getAllProducts: ProductResonse[];
}

export default function suplemento({ product }: any) {
  console.log(product);
  return <Product product={product} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allProducts = await clientServerSide
    .query<Response>({
      query: gql`
        query {
          getAllProducts {
            id
          }
        }
      `,
    })
    .then((result) => {
      return result.data.getAllProducts;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });

  const productsIds = allProducts.map((product) => {
    return {
      params: { id: product.id },
    };
  });

  return {
    paths: productsIds,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const paths = context.params as { id: string };
  console.log(paths.id);

  const product = await clientServerSide
    .query<any>({
      query: gql`
        query {
          getProductById(id: "${paths.id}") {
            id
            title
            main_image
            secodary_images
            description
            price
          }
        }
      `,
    })
    .then((result) => {
      return result.data.getProductById;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  console.log(product);

  return {
    props: {
      product,
    },
  };
};
