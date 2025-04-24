import { Form, Title, Label, InputTitle, InputContent, Button } from "./styles";

type IPostFormProps = {
  id: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  titleLabel?: string;
  contentLabel?: string;
  titleValue?: string;
  setTitleValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  contentValue?: string;
  setContentValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isDisabled: boolean;
};

export const PostForm: React.FC<IPostFormProps> = ({
  id,
  handleSubmit,
  title,
  titleLabel = "Title",
  contentLabel = "Content",
  titleValue = "",
  setTitleValue,
  contentValue = "",
  setContentValue,
  isDisabled,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Title>{title}</Title>
      <Label htmlFor="title">{titleLabel}</Label>
      <InputTitle
        value={titleValue}
        type="text"
        id={`title-${id}`}
        placeholder="Hello world"
        onChange={setTitleValue}
      />
      <Label htmlFor="content">{contentLabel}</Label>
      <InputContent
        value={contentValue}
        id={`content-${id}`}
        placeholder="Content here"
        onChange={setContentValue}
      />
      <Button type="submit" disabled={isDisabled}>
        Create
      </Button>
    </Form>
  );
};
