import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.space.md};
`;

export const Form = styled.form`
  max-width: 500px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.space.xl};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  border: ${({ theme }) => `${theme.border.thin} ${theme.colors.gray400}`};

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.gray900};
  font-size: ${(props) => props.theme.fontSizes["xl+"]};
  font-weight: 700;
  padding-bottom: ${(props) => props.theme.space.xl};
`;

export const Label = styled.label`
  font-weight: 400;
  margin-bottom: ${(props) => props.theme.space.xs};
`;

export const Input = styled.input`
  height: ${(props) => props.theme.space.xxl};
  border-radius: ${(props) => props.theme.borderRadius.md};
  border: ${({ theme }) => `${theme.border.thin} ${theme.colors.gray500}`};
  padding: ${(props) => `0 ${props.theme.space.sm}`};
  margin-bottom: ${(props) => props.theme.space.md};
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
`;
