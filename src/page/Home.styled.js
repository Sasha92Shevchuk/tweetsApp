import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  color: #fff;
`;

export const BackgroundImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 20px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: absolute;
  top: 10px;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 22px;
  text-align: center;
`;
