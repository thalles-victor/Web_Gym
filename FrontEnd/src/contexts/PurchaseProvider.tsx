import { ReactNode, createContext, useState } from "react"
import { AddressType } from "./AddressType";

type TypePayment = "BOLETO" | "CREDIT_CARD" | null;

interface PurchaseContextProps {
  productId: string | null;
  amount: number | 1;
  typePayment: TypePayment;
  address: AddressType | null;

  SetProductId: (value: string) => void;
  SetAmount: (value: number) => void;
  SetTypePayment: (value: TypePayment) => void;
  SetAddress: (value: AddressType) => void;
}

interface PaymentProviderProps {
  children: ReactNode
}

export const PurchaseContext = createContext({} as PurchaseContextProps)

export function PurchaseProvider({ children }: PaymentProviderProps) {
  const [productId, setProductId ] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | 1>(1);
  const [typePayment , setTypePayment] = useState<TypePayment>(null);
  const [address, setAddress] = useState<AddressType | null>(null);

  function SetProductId(value: string) {
    setProductId(value)
  }

  function SetAmount(value: number) {
    setAmount(value)
  }

  function SetTypePayment(value: TypePayment) {
    setTypePayment(value)
  }

  function SetAddress(value: AddressType) {
    setAddress(value)
  }

  return (
    <PurchaseContext.Provider value={{
      productId,
      amount,
      typePayment,
      address,
      SetProductId,
      SetAmount,
      SetTypePayment,
      SetAddress
    }}>
      { children }
    </PurchaseContext.Provider>
  )
}