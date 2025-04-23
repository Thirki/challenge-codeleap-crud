import { Title, Wrapper, Subtitle, Image } from "./styles";
import image from "../../assets/nasa_astronaut.png";

export const NotFoundPage = () => {
  return (
    <Wrapper>
      <Title>Não encontrado</Title>
      <Subtitle>
        Ops! A página que você está tentando acessar não foi encontrada.
      </Subtitle>
      <Image src={image} alt="Example" />
    </Wrapper>
  );
};
