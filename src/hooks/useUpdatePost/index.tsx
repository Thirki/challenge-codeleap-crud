import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePost } from "../../services/posts";


export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number;
      payload: { title: string; content: string };
    }) => updatePost(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};