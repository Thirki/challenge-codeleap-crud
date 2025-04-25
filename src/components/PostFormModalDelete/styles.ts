import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.space.xl};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  border: ${({ theme }) => `${theme.border.thin} ${theme.colors.gray600}`};

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.gray900};
  font-size: ${(props) => props.theme.fontSizes["xl+"]};
  font-weight: 700;
  padding-bottom: ${(props) => props.theme.space.xl};
`;

export const ButtonArea = styled.div`
  flex: none;
  align-self: flex-end;
  display: flex;
  gap: ${(props) => props.theme.space.md};
`;

export const Button = styled.button`
  all: unset;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.danger};
  padding: ${({ theme }) => `${theme.space.xxs} ${theme.space.xxl}`};
  border-radius: ${(props) => props.theme.borderRadius.md};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const CancellButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.gray900};
  border: ${({ theme }) => `${theme.border.thin} ${theme.colors.gray900}`};
`;
