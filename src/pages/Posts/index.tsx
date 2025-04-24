import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../../contexts/LoginContext/hooks/useLoginContext";
import { Header, Wrapper, Text } from "./styles";
import { PostComponent, PostList } from "../../components";
import { usePosts } from "../../hooks";

const genericUser = {
  author_ip: "",
  content: "Loading",
  created_datetime: "0000-01-01T00:00:00Z",
  title: "Loading",
  username: "Loading",
};

export const Posts = () => {
  const navigate = useNavigate();
  const { user } = useLoginContext();
  const { data, isLoading, refetch } = usePosts();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Wrapper>
      <Header>
        <Text>CodeLeap Network</Text>
      </Header>
      <PostComponent refetch={refetch} />
      {data?.results.length && <PostList posts={data?.results} />}
      {isLoading && (
        <PostList
          posts={[
            { ...genericUser, id: 0 },
            { ...genericUser, id: 2 },
            { ...genericUser, id: 3 },
          ]}
        />
      )}
    </Wrapper>
  );
};
