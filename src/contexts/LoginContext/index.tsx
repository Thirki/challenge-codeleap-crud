"use client";

import { useState, ReactNode, useMemo, useCallback } from "react";
import { LoginContext } from "./context";

type LoginProviderProps = {
  children: ReactNode;
};

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [user, setUser] = useState<string | null>(null);

  const login = useCallback((username: string) => {
    setUser(username);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      user,
    }),
    [login, logout, user]
  );

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
