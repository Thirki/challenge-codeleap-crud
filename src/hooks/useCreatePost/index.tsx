import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../../services/posts";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
