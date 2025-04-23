import { useState } from "react";
import { Form, Wrapper, Title, Label, Input, Button } from "./styles";

export const HomePage = () => {
  const [name, setName] = useState("");

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formatedText = event.target.value.trimStart();
    setName(formatedText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setName("");
    //@TODO: Tratar o nome apos o submit
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
          value={name}
          onChange={handleChangeUsername}
        />
        <Button type="submit">Enter</Button>
      </Form>
    </Wrapper>
  );
};
