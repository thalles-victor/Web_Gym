import { ProductContextType } from "..";
import { ProductList } from "../components/Product/ProductList";
import { Spinner } from "phosphor-react"

interface IndexProps {
  value: ProductContextType;
}

export function Index({ value }: IndexProps) {
  if (value === "List") return <ProductList />
  return <Spinner size={64} />
}