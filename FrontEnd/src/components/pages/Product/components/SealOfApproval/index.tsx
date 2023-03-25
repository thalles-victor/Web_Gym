import { CheckCircle } from "phosphor-react"
import type { ReactNode } from "react";
import { SealOfApprovalContainer } from "./styles";

interface  SealOfApprovalProps {
  title: string;
  icon: ReactNode;
  description: string;
}

export function SealOfApproval({
  title,
  icon,
  description
}: SealOfApprovalProps) {
  return (
    <SealOfApprovalContainer>
      <center>
        {icon}
        <h1>{title}</h1>
      </center>
      <p>{description}</p>
    </SealOfApprovalContainer>
  )
}