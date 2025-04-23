import { createContext } from "react";

export type LoginContextType = {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
};

export const LoginContext = createContext<LoginContextType | undefined>(
  undefined
);
