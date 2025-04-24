import { api } from "./api";

export type IPost = {
  id: number;
  username: string;
  title: string;
  content: string;
  created_datetime: string;
  author_ip: string;
};

export type IPostResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPost[];
};

export type ICreatePostPayload = {
  username: string;
  title: string;
  content: string;
};

export const fetchPosts = async (): Promise<IPostResponse> => {
  const { data } = await api.get("/careers/");
  return data;
};

export const createPost = async (
  payload: ICreatePostPayload
): Promise<IPost> => {
  const { data } = await api.post("/careers/", payload);
  return data;
};
