import { recoverUserInformations } from "@/utils/auth";
import {} from "next/router";

import { setCookie, parseCookies } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";

interface SignInRequestData {
  email: string;
  password: string;
}

interface SignUpRequesData {
  name: string;
  email: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  // signIn: ({ email, password }: SignInRequestData) => void;
  // signUp: ({ name, email, password }: SignUpRequesData) => void;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { gym_project_token: token } = parseCookies();

    recoverUserInformations("")
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });

    console.log("revocer log is: ");
    if (token) {
    }
  });

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
