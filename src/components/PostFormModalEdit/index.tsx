import { useState } from "react";
import { useLoginContext } from "../../contexts/LoginContext/hooks/useLoginContext";
import { PostForm } from "../PostForm";
import { useUpdatePost } from "../../hooks";
import { Button, ButtonWrapper, CancellButton } from "./styles";

interface IPostFormModalEditProps {
  handleCloseEdit: () => void;
}

export const PostFormModalEdit: React.FC<IPostFormModalEditProps> = ({
  handleCloseEdit,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { selectedPost } = useLoginContext();
  const { mutate: updatePost, isPending } = useUpdatePost();

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatedText = e.target.value.trimStart();
    setTitle(formatedText);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const formatedText = e.target.value.trimStart();
    setContent(formatedText);
  };

  const handleCancel = () => {
    handleCloseEdit();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await updatePost({
        id: selectedPost!.id,
        payload: {
          title,
          content,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setTitle("");
      setContent("");
      handleCancel();
    }
  };

  return (
    <div>
      <PostForm
        id="edit"
        title="Edit item"
        titleValue={title}
        setTitleValue={handleChangeTitle}
        contentValue={content}
        setContentValue={handleChangeContent}
        handleSubmit={handleSubmit}
      >
        <ButtonWrapper>
          <CancellButton type="reset" onClick={handleCancel}>
            Cancel
          </CancellButton>
          <Button type="submit" disabled={!title || !content || isPending}>
            Save
          </Button>
        </ButtonWrapper>
      </PostForm>
    </div>
  );
};
