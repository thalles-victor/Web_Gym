import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { HeaderContainer, Link } from "./styles";

type PathsTypes = "/suplementos" | "/dashboard" | "/" | string;

export function Header() {
  const router = useRouter();
  const [pathName, setPathName] = useState<PathsTypes>("/");

  useEffect(() => {
    setPathName(router.pathname);
  }, [router.pathname]);

  console.log(pathName);
  return (
    <HeaderContainer ableToShow={pathName === "/dashboard" ? "true" : "false"}>
      <Link href="/" pathsOfLinks={pathName === "/" ? "current" : "default"}>
        Home
      </Link>

      <Link
        href="/suplementos"
        pathsOfLinks={pathName === "/suplementos" ? "current" : "default"}
      >
        Suplementos
      </Link>
      <Link href="">roupas</Link>
      <Link href="">Acessórios</Link>
      <Link href="/treinos">Treinos</Link>
      <Link href="">Equipamentos</Link>
      <Link href="/auth/criar-conta">Criar conta</Link>
      <Link href="/auth/entrar">Entrar</Link>
    </HeaderContainer>
  );
}
