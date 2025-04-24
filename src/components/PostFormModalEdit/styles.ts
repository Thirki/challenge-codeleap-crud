import styled from "styled-components";

export const ButtonWrapper = styled.div`
  flex: none;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.space.md};
`;

export const Button = styled.button`
  all: unset;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.success};
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
