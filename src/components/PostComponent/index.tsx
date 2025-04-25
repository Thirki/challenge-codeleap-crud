import { useState } from "react";
import { PostForm } from "../PostForm";
import { Button, Wrapper } from "./styles";
import { useCreatePost } from "../../hooks";
import { useLoginContext } from "../../contexts/LoginContext/hooks/useLoginContext";

export const PostComponent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useLoginContext();
  const { mutate: createPost, isPending } = useCreatePost();

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatedText = e.target.value.trimStart();
    setTitle(formatedText);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const formatedText = e.target.value.trimStart();
    setContent(formatedText);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createPost({
        content: content,
        title: title,
        username: user || "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setTitle("");
      setContent("");
    }
  };

  return (
    <Wrapper>
      <PostForm
        id="create"
        title="What’s on your mind?"
        titleValue={title}
        setTitleValue={handleChangeTitle}
        contentValue={content}
        setContentValue={handleChangeContent}
        handleSubmit={handleSubmit}
      >
        <Button type="submit" disabled={!title || !content || isPending}>
          Create
        </Button>
      </PostForm>
    </Wrapper>
  );
};
