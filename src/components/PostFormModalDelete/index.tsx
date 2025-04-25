import { useLoginContext } from "../../contexts/LoginContext/hooks/useLoginContext";
import { useDeletePost } from "../../hooks";
import { Wrapper, ButtonArea, Title, CancellButton, Button } from "./styles";

interface IPostFormModalDeleteProps {
  handleCloseDelete: () => void;
}

export const PostFormModalDelete: React.FC<IPostFormModalDeleteProps> = ({
  handleCloseDelete,
}) => {
  const { mutate: deletePost } = useDeletePost();
  const { selectedPost } = useLoginContext();

  const handleDeletePost = () => {
    try {
      deletePost({ id: selectedPost!.id });
    } catch (error) {
      console.error(error);
    } finally {
      handleCloseDelete();
    }
  };

  return (
    <Wrapper>
      <Title>Are you sure you want to delete this item?</Title>
      <ButtonArea>
        <CancellButton type="reset" onClick={handleCloseDelete}>
          Cancel
        </CancellButton>
        <Button type="button" onClick={handleDeletePost}>
          Delete
        </Button>
      </ButtonArea>
    </Wrapper>
  );
};
