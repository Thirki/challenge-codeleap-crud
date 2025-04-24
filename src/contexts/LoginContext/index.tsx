"use client";

import { useState, ReactNode, useMemo, useCallback } from "react";
import { LoginContext } from "./context";
import { usePosts } from "../../hooks";
import { IPost } from "../../services/posts";

type LoginProviderProps = {
  children: ReactNode;
};

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [user, setUser] = useState<string | null>("Thirki");
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);

  const { data, isLoading, refetch } = usePosts();

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
      data,
      isLoading,
      refetch,
      selectedPost,
      setSelectedPost
    }),
    [login, logout, user, data, isLoading, refetch, selectedPost, setSelectedPost]
  );

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
