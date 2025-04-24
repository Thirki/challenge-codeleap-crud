import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../../contexts/LoginContext/hooks/useLoginContext";
import { Header, Wrapper, Text } from "./styles";
import { PostComponent } from "../../components";

export const Posts = () => {
  const navigate = useNavigate();
  const { user } = useLoginContext();

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
      <PostComponent />
    </Wrapper>
  );
};
