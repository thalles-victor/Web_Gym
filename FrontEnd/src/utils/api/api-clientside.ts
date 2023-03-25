import { ApolloClient, InMemoryCache } from "@apollo/client";
import { parseCookies } from "nookies";

import { client } from "./apoloclient";

export function getAPIClientSide(context?: any) {
  const { gym_project_token: token } = parseCookies(context);

  console.log("token is: ", token);

  const api = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
    headers: {
      Authorization: token,
    },
  });

  return api;
}
