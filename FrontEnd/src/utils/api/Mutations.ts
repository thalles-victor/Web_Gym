import { gql, useMutation } from '@apollo/client';

export const REGISTER_PRODUCT_MUTATION = gql`
  mutation RegisterProduct($title: String!, $main_image: String!, $secondary_images: [String!]!, $description: String!, $price: Float!) {
    registerProduct(product: { title: $title, main_image: $main_image, secondary_images: $secondary_images, description: $description, price: $price }) {
        id
        title
        main_image
      }
  }
`;

export const SIGN_UP_MUTATION = gql`
  mutation RegisterUser($name: String!, $email: String!, $password: String!){
    registerUser(
      user: {
        name: $name
        email: $email
        password: $password
      }
    ) {
      user {
        id
        name
        email
      }
      token
    }
  }
`