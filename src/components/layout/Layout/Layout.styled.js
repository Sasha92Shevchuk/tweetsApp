import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  max-width: 1440px;

  min-height: calc(100vh - 100px);
`;
