import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.space.xl};
`;

export const Button = styled.button`
  all: unset;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${({ theme }) => `${theme.space.xxs} ${theme.space.xxl}`};
  flex: none;
  align-self: flex-end;
  border-radius: ${(props) => props.theme.borderRadius.md};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;