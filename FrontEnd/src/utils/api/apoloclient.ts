import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getAPIClientSide } from "./api-clientside";

export const clientServerSide = new ApolloClient({
  uri: "http://API_gateway:3000/graphql",
  cache: new InMemoryCache(),
});

export const client = getAPIClientSide();
