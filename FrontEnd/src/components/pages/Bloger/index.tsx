import { TranningCard } from "./cards";

import { BloggerContainer } from "./styles"

export function Blogger() {
  return (
   <BloggerContainer>
    <TranningCard
      title="Tempo é um problema para você? Musculação time-efficient pode ser a saída!"
      image={{
        src:"https://treinomestre.com.br/wp-content/uploads/2016/05/Musculacao-time-efficient.jpg.webp",
        width: 320,
        height: 0,

      }}
    />
   </BloggerContainer>
  )
}