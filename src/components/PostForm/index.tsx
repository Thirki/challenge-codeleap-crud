import { Form, Title, Label, InputTitle, InputContent, Button } from "./styles";

type IPostFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  titleLabel?: string;
  contentLabel?: string;
  titleValue?: string;
  setTitleValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  contentValue?: string;
  setContentValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const PostForm: React.FC<IPostFormProps> = ({
  handleSubmit,
  title,
  titleLabel = "Title",
  contentLabel = "Content",
  titleValue = "",
  setTitleValue,
  contentValue = "",
  setContentValue,
}) => {
  return (
    <Form onClick={handleSubmit}>
      <Title>{title}</Title>
      <Label htmlFor="title">{titleLabel}</Label>
      <InputTitle
        value={titleValue}
        type="text"
        id="title"
        placeholder="Hello world"
        onChange={setTitleValue}
      />
      <Label htmlFor="content">{contentLabel}</Label>
      <InputContent
        value={contentValue}
        id="content"
        placeholder="Content here"
        onChange={setContentValue}
      />
      <Button type="submit">Create</Button>
    </Form>
  );
};
