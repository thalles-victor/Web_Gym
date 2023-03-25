import { useState } from "react"
import { ProductList } from "./components/Product/ProductList";
import { Index } from "./Index";
import { DashboardContainer, Main, CategoryField } from "./styles";

export type ProductContextType = "List" | "ToApprove" | "Sold";

export function Dashboard() {
  const [context, setContext] = useState<ProductContextType>("List")

  return(
    <DashboardContainer>
      <aside>
        <CategoryField>
          <h1>Produtos</h1>
          <button
            onClick={() => setContext("List")}
          >Listar</button>
          <button
            onClick={() => setContext("ToApprove")}
          >Para aprovar</button>
          <button>Vendidos</button>
          <button>Recusados</button>
        </CategoryField>
        <CategoryField>
          <h1>Usuários</h1>
          <button>Todos</button>
        </CategoryField>
      </aside>

      <Main>
        <Index value={context}/>
      </Main>
    </DashboardContainer>
  )
}