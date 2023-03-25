import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
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
`;

export const GET_PARTIAL_PRODUCTS_FOR_PRODUCTS_LIST_PAGE = gql`
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
`;
