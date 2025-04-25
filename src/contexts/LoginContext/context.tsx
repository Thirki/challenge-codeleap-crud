import { createContext } from "react";
import { IPost } from "../../services/posts";

export type LoginContextType = {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
  selectedPost: IPost | null;
  setSelectedPost: (arg: IPost | null) => void;
};

export const LoginContext = createContext<LoginContextType | undefined>(
  undefined
);
