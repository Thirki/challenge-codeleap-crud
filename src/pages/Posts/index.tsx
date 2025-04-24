import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../../contexts/LoginContext/hooks/useLoginContext";
import { Header, Wrapper, Text } from "./styles";
import { PostComponent } from "../../components";
import { usePosts } from "../../hooks";

export const Posts = () => {
  const navigate = useNavigate();
  const { user } = useLoginContext();
  //@TODO: Retirar oque não for usar
  const { data, isLoading, error, refetch } = usePosts(user ?? "");

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
    </Wrapper>
  );
};
