import { Suplementos } from "@/components/pages/Suplementos";
import { clientServerSide } from "@/utils/api/apoloclient";
import { gql } from "apollo-server-express";
import { GetStaticProps } from "next";

export default function suplementos({ allProducts }: any) {
  return <Suplementos products={allProducts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await clientServerSide
    .query({
      query: gql`
        query {
          getAllProducts {
            id
            title
            price
            main_image
          }
        }
      `,
    })
    .then((result) => result.data.getAllProducts)
    .catch((error) => {
      console.log(error);
      return [];
    });

  return {
    props: {
      allProducts: products,
    },
  };
};
