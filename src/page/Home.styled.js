import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  color: #fff;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 20px;
  z-index: -1;
`;
export const Content = styled.div`
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
