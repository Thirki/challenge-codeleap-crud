import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 27px 37px;
  border-bottom: ${({ theme }) =>
    `${theme.border.thin} ${theme.colors.gray600}`};
`;

export const Text = styled.h1`
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes["xl+"]};
`;
