import { gql } from "@apollo/client";
import { client } from "./api/apoloclient";
import { getAPIClientSide } from "./api/api-clientside";

export async function recoverUserInformations(token: string) {
  const user = await client.query({
    query: gql`
      query {
        recoverUserInformations {
          id
          name
          email
          address {
            id
            address
            city
            state
            postal_code
            country
          }
        }
      }
    `,
  });
  return user;
}
