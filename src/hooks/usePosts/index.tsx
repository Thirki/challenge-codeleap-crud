import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../services/posts";

export const usePosts = (username: string) => {
  return useQuery({
    queryKey: ["posts", username],
    queryFn: () => fetchPosts(username),
    enabled: !!username,
    refetchOnWindowFocus: false,
  });
};
