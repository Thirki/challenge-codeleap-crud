import { useContext } from "react";
import { LoginContext } from "../../context";

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error(
      "useLoginContext deve ser usado dentro de um LoginProvider"
    );
  }
  return context;
};
