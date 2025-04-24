import editIcon from "../../assets/editIcon.svg";
import trashIcons from "../../assets/trashIcons.svg";
import { EditModal } from "../EditModal";
import { IPost } from "../../services/posts";
import { getRelativeTimeFromNow } from "../../utils";
import { useLoginContext } from "../../contexts/LoginContext/hooks/useLoginContext";
import {
  Wrapper,
  Header,
  ButtonsWrapper,
  Button,
  Title,
  PostContent,
  PostText,
  PostSummary,
  PostSummaryTitle,
  PostSummaryTime,
} from "./styles";
import { useState } from "react";

type IPostItemProps = {
  post: IPost;
};

export const PostItem: React.FC<IPostItemProps> = ({ post }) => {
  const [isOpenedEdit, setIsOpenedEdit] = useState(false);
  const { user, setSelectedPost } = useLoginContext();

  const handleDelete = () => {
    //@TODO: Adicionar funções
    console.log("🚀 ~ handleDelete ~");
  };

  const handleEdit = () => {
    setIsOpenedEdit(true);
    setSelectedPost(post);
  };

  const handleCloseEdit = () => {
    setIsOpenedEdit(false)
    setSelectedPost(null);
  }

  return (
    <Wrapper>
      <EditModal isOpenedEdit={isOpenedEdit} handleCloseEdit={handleCloseEdit} />
      <Header>
        <Title>{post.title}</Title>
        {user === post.username && (
          <ButtonsWrapper>
            <Button onClick={handleDelete}>
              <img src={trashIcons} alt="icone de excluir" />
            </Button>
            <Button onClick={handleEdit}>
              <img src={editIcon} alt="icone de editar" />
            </Button>
          </ButtonsWrapper>
        )}
      </Header>
      <PostContent>
        <PostSummary>
          <PostSummaryTitle>@{post.username}</PostSummaryTitle>
          <PostSummaryTime>
            {getRelativeTimeFromNow(post?.created_datetime)}
          </PostSummaryTime>
        </PostSummary>
        <PostText>{post.content}</PostText>
      </PostContent>
    </Wrapper>
  );
};
