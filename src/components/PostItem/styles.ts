import styled from "styled-components";

export const Wrapper = styled.section``;

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.space.xl};
  border-top-left-radius: ${(props) => props.theme.borderRadius.lg};
  border-top-right-radius: ${(props) => props.theme.borderRadius.lg};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes["xl+"]};
`;

export const ButtonsWrapper = styled.nav`
  display: flex;
  gap: ${(props) => props.theme.space.xl};
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
`;

export const PostContent = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.space.xl};
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.lg};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.lg};
  border: ${({ theme }) => `${theme.border.thin} ${theme.colors.gray600}`};
  border-top: none;

  display: flex;
  flex-direction: column;
`;

export const PostSummary = styled.div`
  margin-bottom: ${(props) => props.theme.space.md};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PostSummaryTitle = styled.p`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.gray500};
`;

export const PostSummaryTime = styled(PostSummaryTitle)`
  font-weight: 400;
`;

export const PostText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
`;
