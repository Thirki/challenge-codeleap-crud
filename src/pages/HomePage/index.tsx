import { Form, Wrapper, Title, Label, Input, Button } from "./styles";
import { useLoginContext } from "../../contexts/LoginContext/hooks/useLoginContext";

export const HomePage = () => {
  const { login, logout, user } = useLoginContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    logout();
    //@TODO: Tratar o nome apos o submit
  };

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formatedText = event.target.value.trimStart();
    login(formatedText);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Welcome to CodeLeap network!</Title>
        <Label htmlFor="userName">Please enter your username</Label>
        <Input
          type="text"
          id="userName"
          placeholder="John doe"
          value={user || ""}
          onChange={handleChangeUsername}
        />
        <Button type="submit">Enter</Button>
      </Form>
    </Wrapper>
  );
};
