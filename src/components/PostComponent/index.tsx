import { useState } from "react";
import { PostForm } from "../PostForm";
import { Wrapper } from "./styles";

export const PostComponent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatedText = e.target.value.trimStart();
    setTitle(formatedText);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const formatedText = e.target.value.trimStart();
    setContent(formatedText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //@TODO: Adicionar tratamento ao dar submit
    setTitle("");
    setContent("");
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
        isDisabled={!title || !content}
      />
    </Wrapper>
  );
};
