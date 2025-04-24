import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../services/posts";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
    refetchOnWindowFocus: false,
  });
};
