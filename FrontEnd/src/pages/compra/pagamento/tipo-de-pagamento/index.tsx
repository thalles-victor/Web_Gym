import { PurchaseContext } from "@/contexts/PurchaseProvider"
import { useContext } from "react"

export default function PageName() {
  const { address } = useContext(PurchaseContext)

  return <h1>{address && JSON.stringify(address)}</h1>
}