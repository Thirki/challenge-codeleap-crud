import { IPost } from "../../services/posts";
import { PostItem } from "../PostItem";
import { Wrapper } from "./styles";

type IPostListProps = {
  posts: IPost[];
};

export const PostList: React.FC<IPostListProps> = ({ posts }) => {
  return (
    <Wrapper>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </Wrapper>
  );
};
