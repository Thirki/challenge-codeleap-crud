import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: ${({ theme }) => `0 ${theme.space.xl}`};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space.xl};
`;
