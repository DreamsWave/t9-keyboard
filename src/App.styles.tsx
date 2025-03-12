import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.default};
`;

export const Center = styled.div`
  margin: 0 auto;
`;
