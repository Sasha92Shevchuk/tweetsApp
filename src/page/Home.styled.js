import styled from "styled-components";
import bg from "../assets/home_BG.jpg";

export const Content = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  max-width: 1280px;
  max-height: 720px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 22px;
  text-align: center;
`;
