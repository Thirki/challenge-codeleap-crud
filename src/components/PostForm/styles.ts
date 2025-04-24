import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.space.xl};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  border: ${({ theme }) => `${theme.border.thin} ${theme.colors.gray600}`};

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes["xl+"]};
  margin-bottom: ${(props) => props.theme.space.xl};
`;

export const Label = styled.label`
  display: block;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.md};
  margin-bottom: ${(props) => props.theme.space.xxs};
`;

export const InputTitle = styled.input`
  width: 100%;
  height: ${(props) => props.theme.space.xxl};
  border-radius: ${(props) => props.theme.borderRadius.md};
  border: ${({ theme }) => `${theme.border.thin} ${theme.colors.gray500}`};
  padding: ${(props) => `0 ${props.theme.space.sm}`};
  margin-bottom: ${(props) => props.theme.space.xl};
`;

export const InputContent = styled.textarea`
  width: 100%;
  height: 74px;
  border-radius: ${(props) => props.theme.borderRadius.md};
  border: ${({ theme }) => `${theme.border.thin} ${theme.colors.gray500}`};
  padding: ${(props) => `${props.theme.space.xxs} ${props.theme.space.sm}`};
  resize: none;
  margin-bottom: ${(props) => props.theme.space.xl};
`;
