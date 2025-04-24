import { IPost } from "../../services/posts";
import { getRelativeTimeFromNow } from "../../utils";
import editIcon from "../../assets/editIcon.svg";
import trashIcons from "../../assets/trashIcons.svg";
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
import { useLoginContext } from "../../contexts/LoginContext/hooks/useLoginContext";

type IPostItemProps = {
  post: IPost;
};

export const PostItem: React.FC<IPostItemProps> = ({ post }) => {
  const { user } = useLoginContext();

  const handleDelete = () => {
    //@TODO: Adicionar funções
    console.log("🚀 ~ handleDelete ~");
  };

  const handleEdit = () => {
    //@TODO: Adicionar funções
    console.log("🚀 ~ handleEdit ~");
  };

  return (
    <Wrapper>
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
