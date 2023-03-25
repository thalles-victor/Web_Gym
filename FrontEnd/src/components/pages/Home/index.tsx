import React from "react"
import  { useRouter } from "next/router"
import NextImage from "next/image";
import YouTube from "react-youtube"

import { HomeContainer, Button, FristSession, SecondSession } from "./styles"
import AdultImage from "../../../assests/adult-gabf12c8c5_1920.jpg"
import DarkImage from "../../../assests/dark-gff65f73d9_1920.jpg"

export function Home() {
  const router = useRouter();

  return(
    <HomeContainer>
      <FristSession>
        <div>
          <h1>Gym sua plataforma de treino</h1>
          <p>Transforme o seu corpo</p>
          <Button
            onClick={() => router.push('/suplementos')}
          >Ir para nossa loja</Button>
        </div>
        <NextImage
          src={DarkImage}
          width={500}
          height={0}
          alt=""
        />
      </FristSession>
      <SecondSession>
        <h1>Tenha <strong>desconto</strong> em nossos produtos</h1>
        <h1>Ao assinar nossa plataforma de treino</h1>
        <Button
            onClick={() => router.push('/assinar')}
        >Assinar agora</Button>

        <NextImage
          src={AdultImage}
          width={AdultImage.width}
          height={0}
          alt=""
        />
        <YouTube
          videoId="QlobezO2xuE"
        />
      </SecondSession>
    </HomeContainer>
  )
}