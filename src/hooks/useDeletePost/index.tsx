import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../../services/posts";

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: { id: number }) => deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
