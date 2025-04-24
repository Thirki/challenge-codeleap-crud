import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  color: ${(props) => props.theme.colors.gray900};
  font-weight: 700;
`;

export const Subtitle = styled.p`
  padding-top: ${(props) => props.theme.space.md};
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.gray500};
  text-align: center;
`;

export const Image = styled.img`
  padding-top: ${(props) => props.theme.space.md};
  max-width: 500px;
  width: 100%;
`;
