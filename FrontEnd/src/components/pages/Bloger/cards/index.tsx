import { TraningCardContainer } from "./styles";

interface TraningCardProps {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt?: string | ""
  }
}

export function TranningCard({
  title,
  image
}: TraningCardProps) {
  return (
    <TraningCardContainer>
      <h1>{title}</h1>
      
    </TraningCardContainer>
  )
}