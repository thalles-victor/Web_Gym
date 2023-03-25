import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/globals";
import { PurchaseProvider } from "@/contexts/PurchaseProvider";
import { ApolloProvider } from "@apollo/client";
import { client } from "../utils/api/apoloclient";

import { Header } from "@/components/Header";
import { AuthProvider } from "@/contexts/AuthContext";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <PurchaseProvider>
        <Header />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </PurchaseProvider>
    </ApolloProvider>
  );
}
